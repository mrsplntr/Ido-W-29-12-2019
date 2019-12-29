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
    marginBottom: '1rem'
  },
  title: {
    marginLeft: '5px',
    flexGrow: 1
  },
  routeClass: {
    '&:hover': {
      border: '0.5px solid white',
      color: '#3F51B5',
      backgroundColor: 'white',
      borderRadius: '5px'
    },
    fontWeight: '500',
    margin: '5px',
    padding: '5px',
    color: 'white',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontFamily: 'Roboto'
  },
  routeClassActive: {
    color: '#3F51B5',
    backgroundColor: 'white',
    borderRadius: '5px'
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Brightness6Icon />
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
}

export default Navbar;