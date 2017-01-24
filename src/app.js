import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {WELCOME_SCREEN, registerScreens} from './screens'
import store from './stores/reducers'

export function start() {
  registerScreens(store, Provider);

  Navigation.startSingleScreenApp({
    screen: {
      screen: WELCOME_SCREEN
    }
  });
}
