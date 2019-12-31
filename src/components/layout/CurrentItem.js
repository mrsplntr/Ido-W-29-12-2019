import React from 'react'

import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const iconAPI = 'https://developer.accuweather.com/sites/default/files';

const CurrentItem = ({
  id,
  from,
  cityName,
  temperature,
  phrase,
  icon,
  isFavorite,
  onFavoriteClick,
  onNavigationClick
}) => {
  
  const handleFavoriteClick = () => {
    onFavoriteClick();
  };

  const handleNavigationClick = () => {
    onNavigationClick();
  };


  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={`${iconAPI}/${icon < 10 ? '0' + icon : icon}-s.png`}
        alt={phrase}
      />{' '}
      <br />
      {cityName} <br />
      {temperature} {phrase}
      <br />
      {from === 'Favorites' && (
        <Fab
          onClick={handleNavigationClick}
          color='primary'
          size='medium'
          variant='extended'
          style={{ marginRight: '5px' }}
        >
          <NavigationIcon />
          Go to
        </Fab>
      )}
      <Fab
        onClick={handleFavoriteClick}
        color={isFavorite ? 'secondary' : 'primary'}
        size='small'
      >
        <FavoriteIcon />
      </Fab>
    </div>
  );
};

export default CurrentItem
