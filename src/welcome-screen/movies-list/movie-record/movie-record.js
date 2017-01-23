import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

const renderTitle = (title, year) => year ? <Text>{title} ({year})</Text> : <Text>{title}</Text>;

class MoviesRecord extends Component {
  render() {
    const {poster_path, year, title, vote_average, showMovieDetails, id} = this.props;

    return (
      <View style={styles.container}>
        <Image style={styles.preview}
               source={{uri: poster_path}}/>
        <View style={styles.details}>
          {renderTitle(title, year)}
          <Text>☆ {vote_average}</Text>
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

