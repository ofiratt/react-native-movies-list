import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {getAllMovies, findMovies, showMovieDetails, selector} from '../stores/movies/actions'
import SearchBar from './serach-bar/search-bar';
import MoviesList from './movies-list/movies-list';

class WelcomeScreen extends Component {
  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    const {movies, findMovies} = this.props;

    return (<View>
      <SearchBar testID="search_bar" onSearch={text => findMovies(text)}></SearchBar>
      <Text> here is the movie app main page</Text>
      <MoviesList movies={movies} showMovieDetails={id => this.showMovieDetails(id)}></MoviesList>
    </View>);
  }

  showMovieDetails(id) {
    const {navigator} = this.props;
    showMovieDetails(navigator, id);
  }
}

const mapStateToProps = state => ({movies: selector.movies(state)});
export default connect(mapStateToProps, {getAllMovies, findMovies})(WelcomeScreen);
