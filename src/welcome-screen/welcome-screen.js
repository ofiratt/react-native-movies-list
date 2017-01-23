import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {getAllMovies, findMovies, selector} from '../stores/movies/actions'
import SearchBar from './serach-bar/search-bar';
import MoviesList from './movies-list/movies-list';
import {MOVIE_DETAILS_SCREEN} from '../screens'


class WelcomeScreen extends Component {
  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    const {movies, findMovies} = this.props;

    return (<View>
      <SearchBar onSearch={text => findMovies(text)}></SearchBar>
      <Text> here is the movie app main page</Text>
      <MoviesList movies={movies} showMovieDetails={id => this.showMovieDetails(id)}></MoviesList>
    </View>);
  }

  showMovieDetails(id) {
    const {navigator} = this.props;
    navigator.push({screen: MOVIE_DETAILS_SCREEN, passProps:{
      movieId: id
    }});
  }
}

const mapStateToProps = state => ({movies: selector.movies(state)});

export default connect(mapStateToProps, {getAllMovies, findMovies})(WelcomeScreen);
