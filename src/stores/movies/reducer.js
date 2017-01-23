const initialState = () => new Map();

export default function reduce(state = initialState(), action) {
  state = action.type === 'incoming-data' ? action.movies : state;
  return state;
}
