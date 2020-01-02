import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Brightness6Icon from '@material-ui/icons/Brightness6';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '5rem'
  },
  title: {
    marginLeft: '5px',
    flexGrow: 1,
    color: 'rgba(0, 159, 219,1)'
  },
  routeClass: {
    '&:hover': {
      color: 'rgba(0, 159, 219,1)',
      backgroundColor: '#dfe2ed'
    },
    border: '1px solid rgba(0, 159, 219,1)',
    borderRadius: '3px',
    fontWeight: '700',
    margin: '3px',
    padding: '7px',
    color: 'rgba(0, 159, 219,1)',
    textDecoration: 'none',
    textTransform: 'uppercase'
  },
  routeClassActive: {
    color: 'white',
    backgroundColor: 'rgba(0, 159, 219,1)'
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        color='default'
      >
        <Toolbar>
          <Brightness6Icon style={{ color: 'rgba(0, 159, 219,1)' }} />
          <Typography variant='h6' className={classes.title}>
            Weather
          </Typography>
          <NavLink
            to='/'
            exact
            className={classes.routeClass}
            activeClassName={classes.routeClassActive}
          >
            Home
          </NavLink>
          <NavLink
            to='/favorites'
            exact
            className={classes.routeClass}
            activeClassName={classes.routeClassActive}
          >
            Favorites
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;