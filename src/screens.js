import WelcomeScreen from './movies-screen/movies-screen';
import WelcomeDetailsScreen from './movie-details-screen/movie-details-screen';
import {Navigation} from 'react-native-navigation';

export const WELCOME_SCREEN = 'com.example.WelcomeScreen';
export const MOVIE_DETAILS_SCREEN = 'com.example.MovieDetailsScreen';

export function registerScreens(store, Provider) {
  Navigation.registerComponent(WELCOME_SCREEN, () => WelcomeScreen, store, Provider);
  Navigation.registerComponent(MOVIE_DETAILS_SCREEN, () => WelcomeDetailsScreen, store, Provider);
}
