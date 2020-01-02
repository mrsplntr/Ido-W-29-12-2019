import axios from 'axios';

import {
  GET_AUTO_COMPLETE_WEATHER,
  GET_FIVE_DAYS_WEATHER,
  GET_CURRENT_WEATHER,
  CLEAN_AUTO_COMPLETE,
  WEATHER_ERROR,
  SET_LOADING
} from './types';

const API_Key = '';

export const getAutoComplete = text => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_Key}&q=${text}`);
    const autoData = res.data;

    dispatch({
      type: GET_AUTO_COMPLETE_WEATHER,
      payload: autoData
    });
  } catch (error) {
    dispatch({
      type: WEATHER_ERROR,
      payload: error
    });
  }
};

let autoTimeout;

export const getFiveDays = (cityKey, cityName) => async dispatch => {
  clearTimeout(autoTimeout);
  try {
    dispatch(setLoading());
    const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_Key}&metric=true`);
    const fiveData = res.data;

    const fiveDataWithCityName = { cityKey, cityName, ...fiveData };

    dispatch({
      type: GET_FIVE_DAYS_WEATHER,
      payload: fiveDataWithCityName
    });
    autoTimeout = setTimeout(() => {
      return dispatch(cleanAutocomplete());
    }, 3000);
  } catch (error) {
    dispatch({
      type: WEATHER_ERROR,
      payload: error
    });
  }
};

export const cleanAutocomplete = () => {
  return {
    type: CLEAN_AUTO_COMPLETE
  };
};

export const getCurrent = (cityKey, cityName) => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_Key}`);
    const currentData = res.data;

    const currentDataWithCityName = { cityKey, cityName, ...currentData };

    dispatch({
      type: GET_CURRENT_WEATHER,
      payload: currentDataWithCityName
    });
  } catch (error) {
    dispatch({
      type: WEATHER_ERROR,
      payload: error
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

