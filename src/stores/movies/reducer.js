import * as types from './action-types';

const initialState = () => new Map();

export default function reduce(state = initialState(), action) {
  switch (action.type) {
    case types.ALL_MOVIES:
    case types.FIND_MOVIES:
      state = action.movies;
      return state;
    default:
      return state;
  }
}
