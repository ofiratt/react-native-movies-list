import * as types from './action-types';
import {getAllMoviesAPI, findMoviesAPI} from './api'

export const getAllMovies = () => dispatch => getAllMoviesAPI().then(movies =>
  dispatch({type: types.ALL_MOVIES, movies: mapRawMovies(movies)})
);

export const findMovies = query => dispatch => findMoviesAPI(query).then(movies =>
  dispatch({type: types.FIND_MOVIES, movies: mapRawMovies(movies)})
);

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
