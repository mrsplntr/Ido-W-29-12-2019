import React from 'react';
import { connect } from 'react-redux';
import { toggleFavorite, checkIfFavorite } from '../../actions/favoritesActions';

import CurrentItem from './CurrentItem';

const Current = ({ current, isFavorite, toggleFavorite, checkIfFavorite }) => {
  if (current === null) {
    return <span>loading....</span>;
  } else {
    checkIfFavorite(current.cityKey);
  }

  const id = current.cityKey;
  const cityName = current.cityName;
  const temperature = current[0]['Temperature']['Metric']['Value'] + `'c`;
  const phrase = current[0]['WeatherText'];
  const icon = current[0]['WeatherIcon'];

  const handleToggle = () => {
    const newFavorite = { id, cityName, temperature, phrase, icon };
    toggleFavorite(newFavorite);
    checkIfFavorite(newFavorite.id);
  };

  return (
    <CurrentItem
      id={id}
      from={'Current'}
      cityName={cityName}
      temperature={temperature}
      phrase={phrase}
      icon={icon}
      isFavorite={isFavorite}
      onFavoriteClick={handleToggle}
    />
  );
};

const mapStateToProps = state => ({
  current: state.weather.current,
  isFavorite: state.favorites.isFavorite
});

export default connect(mapStateToProps, { toggleFavorite, checkIfFavorite })(
  Current
);
