import {MOVIE_DETAILS_SCREEN} from '../../screens'
import {getAllMoviesAPI, findMoviesAPI} from './api'

export const getAllMovies = () => async dispatch => {
  const movies = await getAllMoviesAPI();
  dispatch({type: 'incoming-data', movies: mapRawMovies(movies)});
};

export const findMovies = query => async dispatch => {
  const movies = await findMoviesAPI(query);
  dispatch({type: 'incoming-data', movies: mapRawMovies(movies)});
};

export const showMovieDetails = (navigator, id) => navigator.push({
  screen: MOVIE_DETAILS_SCREEN,
  passProps: {
    movieId: id
  }
});

export const selector = {
  movie: (state, id) => state.moviesList.get(id),
  movies: (state) => [...state.moviesList.values()]
};

const mapRawMovies = rawMoviesResult => {
  const mappedMovies = new Map();
  rawMoviesResult.results.forEach(m => mappedMovies.set(m.id, build(m)));
  return mappedMovies;
};

const build = m => ({
  ...m,
  poster_path: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + m.poster_path,
  backdrop_path: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + m.backdrop_path,
  year: getYear(m)
});

const getYear = m => hasDate(m) ? getDate(m).substr(0, 4) : '';
const hasDate = m => !!getDate(m);
const getDate = m => m.release_date || m.first_air_date;
