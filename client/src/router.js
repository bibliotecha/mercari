import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import LandingPage from './pages/Landing';
import AuthenticationPage from './pages/Authentication';
import RegistrationPage from './pages/Registration';

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route exact path='/signup/'>
        <AuthenticationPage />
      </Route>
      <Route exact path='/signup/'>
        <AuthenticationPage />
      </Route>
      <Route exact path='/auth/registration'>
        <RegistrationPage />
      </Route>
    </BrowserRouter>
  );
};

export default Router;
