import {Navigation} from 'react-native-navigation';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import {WELCOME_SCREEN, registerScreens} from './screens'

import * as reducers from './stores/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export function start() {
  registerScreens(store, Provider);

  Navigation.startSingleScreenApp({
    screen: {
      screen: WELCOME_SCREEN
    }
  });
}
