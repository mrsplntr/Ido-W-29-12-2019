import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const iconAPI = 'https://developer.accuweather.com/sites/default/files';

const useStyles = makeStyles(theme => ({
  btnWeather: {
    '&:hover': {
      color: 'rgba(0, 159, 219,1)',
      border: '1px solid rgba(0, 159, 219,1)',
      backgroundColor: '#dfe2ed'
    },
    color: 'rgba(0, 159, 219,1)',
    border: '1px solid rgba(0, 159, 219,1)',
    borderRadius: '3px',
    fontWeight: '700',
    marginBottom: '15px'
  }
}));

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
  const classes = useStyles();
  
  const handleFavoriteClick = () => {
    onFavoriteClick();
  };

  const handleNavigationClick = () => {
    onNavigationClick();
  };

  const iconFormated = `${iconAPI}/${icon < 10 ? '0' + icon : icon}-s.png`;

  return (
    <Grid container justify='center'>
      <div style={{ textAlign: 'center', width: '240px' }}>
        <Typography
          style={{ paddingTop: '10px', color: 'rgba(0, 159, 219,1)' }}
          variant='h4'
        >
          {cityName}
          <Tooltip title={isFavorite ? 'Remove Favorite' : 'Add  Favorite'}>
            <IconButton onClick={handleFavoriteClick}>
              {isFavorite ? (
                <FavoriteIcon color='secondary' />
              ) : (
                <FavoriteBorderIcon color='secondary' />
              )}
            </IconButton>
          </Tooltip>
        </Typography>
        <Typography
          style={{ height: '50px' }}
          variant='body2'
          color='textSecondary'
        >
          {phrase}
        </Typography>
        <img src={iconFormated} alt={phrase} /> <br />
        <Typography style={{ paddingBottom: '10px' }} variant='body1'>
          {temperature}
        </Typography>
        {from === 'Favorites' && (
          <Button
            onClick={handleNavigationClick}
            variant='outlined'
            color='primary'
            className={classes.btnWeather}
          >
            <span style={{ fontWeight: '700' }}>Go</span> <ArrowRightAltIcon />
          </Button>
        )}
      </div>
    </Grid>
  );
};

export default CurrentItem
