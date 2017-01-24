import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import moviesList from './movies/reducer';

export default createStore(combineReducers({moviesList}), applyMiddleware(thunk));
