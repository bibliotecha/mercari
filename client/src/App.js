import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Landing from './pages/Landing';

export default () => {
  return (
    <BrowserRouter>
      <Route exact path='/'>
        <Landing />
      </Route>
    </BrowserRouter>
  );
};
