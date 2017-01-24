import React, {Component} from 'react';
import {Text, ListView} from 'react-native';
import MoviesRecord from './movie-record/movie-record';

class MoviesList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {dataSource: ds.cloneWithRows(props.movies)};
  }

  componentWillReceiveProps() {
    this.setState((prevState, props) => ({dataSource: this.state.dataSource.cloneWithRows(props.movies)}));
  }

  render() {
    return this.hasMovies() ? this.createMovieList() : <Text>No movies found</Text>;
  }

  createMovieList() {
    const {showMovieDetails} = this.props;

    return <ListView testID="movie_list"
      dataSource={this.state.dataSource}
      renderRow={(rowData, _, index) => <MoviesRecord {...rowData} index={index} showMovieDetails={showMovieDetails} />}
    />;
  }

  hasMovies() {
    return this.props.movies.length !== 0;
  }
}

export default MoviesList;

