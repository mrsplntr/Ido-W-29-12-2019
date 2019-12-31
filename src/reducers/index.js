import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
  weather: weatherReducer,
  favorites: favoritesReducer
});