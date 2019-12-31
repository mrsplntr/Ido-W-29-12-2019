import {
  GET_FAVORITES,
  IS_FAVORITE,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  SET_LOADING,
  FAVORITES_ERROR
} from './types';

export const getFavorites = () => async dispatch => {
  try {
    setLoading();
    const favoritesData =
      JSON.parse(window.localStorage.getItem('localFavorites')) || [];
    
    dispatch({
      type: GET_FAVORITES,
      payload: favoritesData
    });
  } catch (error) {
    dispatch({
      type: FAVORITES_ERROR,
      payload: error
    });
  }
};

export const checkIfFavorite = id => async dispatch => {
  try {
    setLoading();
    const favoritesData =
      JSON.parse(window.localStorage.getItem('localFavorites')) || [];
    const favoriteExist = !!favoritesData.find(f => f.id === id);

    if (favoriteExist) {
      dispatch({
        type: IS_FAVORITE,
        payload: true
      });
    } else {
      dispatch({
        type: IS_FAVORITE,
        payload: false
      });
    }
  } catch (error) {
    dispatch({
      type: FAVORITES_ERROR,
      payload: error
    });
  }
};

export const toggleFavorite = newFavorite => async dispatch => {
  try {
    setLoading();
    const favoritesData =
      JSON.parse(window.localStorage.getItem('localFavorites')) || [];
    const favoriteExist = !!favoritesData.find(f => f.id === newFavorite.id);
    
    if (favoriteExist) {
      const changedFavorites = favoritesData.filter(
        f => f.id !== newFavorite.id
      );
      window.localStorage.setItem(
        'localFavorites',
        JSON.stringify(changedFavorites)
      );

      dispatch({
        type: DELETE_FAVORITE,
        payload: changedFavorites
      });
    } else {
      const changedFavorites = [...favoritesData, newFavorite];
      window.localStorage.setItem(
        'localFavorites',
        JSON.stringify(changedFavorites)
      );

      dispatch({
        type: ADD_FAVORITE,
        payload: changedFavorites
      });
    }

  } catch (error) {
    dispatch({
      type: FAVORITES_ERROR,
      payload: error
    });
  }
};

export const deleteFavorite = id => async dispatch => {
  try {
    setLoading();
    const favoritesData =
      JSON.parse(window.localStorage.getItem('localFavorites')) || [];
    const changedFavorites = favoritesData.filter(f => f.id !== id);
    window.localStorage.setItem(
      'localFavorites',
      JSON.stringify(changedFavorites)
    );

    dispatch({
      type: DELETE_FAVORITE,
      payload: changedFavorites
    });
  } catch (error) {
    dispatch({
      type: FAVORITES_ERROR,
      payload: error
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
