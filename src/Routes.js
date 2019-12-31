import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import ErrorSystem from './components/layout/ErrorSystem';
import Home from './components/screens/Home';
import Favorites from './components/screens/Favorites';

import Container from '@material-ui/core/Container';

const Routes = props => {
  return (
    <BrowserRouter>
      <Navbar />
      <ErrorSystem />
      <Container fixed>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/favorites' component={Favorites} />
          <Route exact path='/city/:cityName' render={() => <Home {...props} />} />
          <Redirect to='/' />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default Routes;
