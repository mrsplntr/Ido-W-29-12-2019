import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './components/screens/Home';
import Favorites from './components/screens/Favorites';

import Container from '@material-ui/core/Container';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container fixed>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/favorites' component={Favorites} />
          <Redirect to='/' />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default Routes;
