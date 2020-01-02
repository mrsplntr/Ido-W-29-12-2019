import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Loader from './components/layout/Loader';
import ErrorSystem from './components/layout/ErrorSystem';
import Home from './components/screens/Home';
import Favorites from './components/screens/Favorites';
import Typography from '@material-ui/core/Typography';

const Routes = props => {
  return (
    <BrowserRouter>
      <Navbar />
      <Loader />
      <ErrorSystem />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/favorites' component={Favorites} />
        <Route
          exact
          path='/city/:cityName'
          render={() => <Home {...props} />}
        />
        <Redirect to='/' />
      </Switch>
      <Typography
        align='center'
        color='textSecondary'
        variant='body2'
        style={{ margin: '2rem' }}
      >
        Developed by Ido W. © All rights reserved.
      </Typography>
    </BrowserRouter>
  );
}

export default Routes;
