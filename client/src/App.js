import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Landing from './pages/Landing';
import Authentication from './pages/Authentication';

export default () => {
  return (
    <BrowserRouter>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route exact path='/auth'>
        <Authentication />
      </Route>
    </BrowserRouter>
  );
};
