import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  },
  colorPrimary: {
    background: 'rgba(0, 159, 219,1)'
  }
}));

const Loader = ({ weatherLoading, favoritesLoading }) => {
  const classes = useStyles();
  
  if (weatherLoading && favoritesLoading)
    return (
      <Container fixed>
        <div className={classes.root}>
          <LinearProgress className={classes.colorPrimary} />
        </div>
      </Container>
    );
  
  return <></>;
};

const mapStateToProps = state => ({
  weatherLoading: state.weather.loading,
  favoritesLoading: state.favorites.loading
});

export default connect(mapStateToProps, null)(Loader);