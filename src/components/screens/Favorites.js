import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFavorites, deleteFavorite } from '../../actions/favoritesActions';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CurrentItem from '../layout/CurrentItem';

const Favorites = ({ favorites, history, getFavorites, deleteFavorite }) => {
  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  if (favorites === null) {
    return <></>;
  }

  const handleDelete = id => {
    deleteFavorite(id);
  };

  const handleGoTO = cityName => {
    history.push(`/city/${cityName}`);
  };

  return (
    <div>
      <Typography
        align='center'
        variant='h4'
        style={{ paddingTop: '10px', color: 'rgba(0, 159, 219,1)' }}
      >
        Favorites
      </Typography>
      <Typography align='center' variant='body2' color='textSecondary'>
        Quick access to...
      </Typography>
      <Grid container justify='center' spacing={3}>
        {favorites.map(f => (
          <Grid key={f.id} item xs={12} sm={6} md={3} lg={3}>
            <Grid container justify='center' style={{ marginTop: '30px' }}>
              <Paper style={{ textAlign: 'center', width: '240px' }}>
                <CurrentItem
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
              </Paper>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  favorites: state.favorites.favorites
});

export default connect(mapStateToProps, { getFavorites, deleteFavorite })(
  withRouter(Favorites)
);
