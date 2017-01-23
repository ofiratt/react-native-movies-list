import React, {Component} from 'react';
import {StyleSheet, View, Button, Image} from 'react-native';
import {MovieTitle, MovieScore} from '../../../movie-components/movie-components';

class MoviesRecord extends Component {
  render() {
    const {poster_path, showMovieDetails, id} = this.props;

    return (
      <View style={styles.container}>
        <Image style={styles.preview} source={{uri: poster_path}}/>
        <View style={styles.details}>
          <MovieTitle {...this.props}/>
          <MovieScore {...this.props}/>
        </View>
        <Button style={styles.showMore} title=">" onPress={() => showMovieDetails(id)}/>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {borderBottomWidth: 1, borderColor: '#8E8E8E', flex: 1, flexDirection: 'row', padding: 5},
  preview: {width: 150, height: 150},
  details: {marginHorizontal: 10, marginVertical: 20, width: 170},
  showMore: {alignSelf: 'flex-end'}
});

export default MoviesRecord;
