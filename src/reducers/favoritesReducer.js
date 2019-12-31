import {
  GET_FAVORITES,
  IS_FAVORITE,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  SET_LOADING,
  FAVORITES_ERROR
} from '../actions/types';

const initialState = {
  favorites: null,
  isFavorite: false,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
        loading: false
      };
    case IS_FAVORITE:
      return {
        ...state,
        isFavorite: action.payload,
        loading: false
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
        loading: false
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case FAVORITES_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        favorites: null,
        loading: false
      };
    default:
      return state;
  }
};
