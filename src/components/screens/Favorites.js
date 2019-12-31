import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFavorites, deleteFavorite } from '../../actions/favoritesActions';

import CurrentItem from '../layout/CurrentItem';

const Favorites = ({ favorites, history, getFavorites, deleteFavorite }) => {
  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  if (favorites === null) {
    return <span>loading....</span>;
  }

  const handleDelete = id => {
    deleteFavorite(id);
  };

  const handleGoTO = cityName => {
    history.push(`/city/${cityName}`);
  };

  return (
    <div>
      {favorites.map(f => (
        <CurrentItem
          key={f.id}
          id={f.id}
          from={'Favorites'}
          cityName={f.cityName}
          temperature={f.temperature}
          phrase={f.phrase}
          icon={f.icon}
          isFavorite={true}
          onFavoriteClick={() => handleDelete(f.id)}
          onNavigationClick={() => handleGoTO(f.cityName)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  favorites: state.favorites.favorites
});

export default connect(mapStateToProps, { getFavorites, deleteFavorite })(
  withRouter(Favorites)
);
