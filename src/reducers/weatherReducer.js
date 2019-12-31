import {
  GET_AUTO_COMPLETE_WEATHER,
  GET_FIVE_DAYS_WEATHER,
  GET_CURRENT_WEATHER,
  CLEAN_AUTO_COMPLETE,
  SET_LOADING,
  WEATHER_ERROR
} from '../actions/types';

const initialState = {
  autoComplete: null,
  fiveDays: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTO_COMPLETE_WEATHER:
      return {
        ...state,
        autoComplete: action.payload,
        loading: false
      };
    case GET_FIVE_DAYS_WEATHER:
      return {
        ...state,
        fiveDays: action.payload,
        loading: false
      };
    case GET_CURRENT_WEATHER:
      return {
        ...state,
        current: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAN_AUTO_COMPLETE:
      return {
        ...state,
        autoComplete: null
      };
    case WEATHER_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        autoComplete: null,
        current: null,
        fiveDays: null,
        loading: false
      };
    default:
      return state;
  }
};
