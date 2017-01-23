import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {selector} from '../stores/movies/actions'
import {MovieTitle, MovieScore} from '../movie-components/movie-components';

class MovieDetailsScreen extends Component {
  render() {
    const {backdrop_path, overview} = this.props.movie;

    return <View style={styles.container}>
      <Image style={{alignSelf: 'stretch', height: 300}} source={{uri: backdrop_path}}></Image>
      <View style={styles.titleContainer}>
        <MovieTitle {...this.props} style={styles.titleText}/>
        <MovieScore {...this.props} style={styles.titleText}/>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>{overview}</Text>
      </View>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  titleContainer: {backgroundColor: '#f5f5f5', height: 70, padding: 10, borderBottomWidth: 1, borderColor: '#8E8E8E'},
  titleText: {fontSize: 18},
  detailsText: {fontSize: 16},
  detailsContainer: {padding: 10}
});

const mapStateToProps = (state, ownProps) => ({movie: selector.movie(state, ownProps.movieId)});
export default connect(mapStateToProps)(MovieDetailsScreen);
