import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {selector} from '../stores/movies/actions'

const renderTitle = (title, year) => year ? <Text style={styles.titleText}>{title} ({year})</Text> :
  <Text style={styles.titleText}>{title}</Text>;

class MovieDetailsScreen extends Component {
  render() {
    const {backdrop_path, year, overview, title, vote_average} = this.props.movie;

    return <View style={styles.container}>
      <Image style={{alignSelf: 'stretch', height: 300}}
             source={{uri: backdrop_path}}></Image>
      <View style={styles.titleContainer}>
        {renderTitle(title, year)}
        <Text style={styles.titleText}>☆ {vote_average}</Text>
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
