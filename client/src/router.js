import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import LandingPage from './pages/Landing';
import AuthenticationPage from './pages/Authentication';
import ItemsPage from './pages/Items';

import { Signup } from './components/Auth/Signup';
import { Login } from './components/Auth/Login';
import { Registration } from './components/Auth/Registration';

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route exact path='/signup/'>
        <AuthenticationPage>
          <Signup />
        </AuthenticationPage>
      </Route>
      <Route exact path='/login/'>
        <AuthenticationPage>
          <Login />
        </AuthenticationPage>
      </Route>
      <Route path='/signup/registration'>
        <AuthenticationPage>
          <Registration />
        </AuthenticationPage>
      </Route>
      <Route path='/users/items'>
        <ItemsPage />
      </Route>
    </BrowserRouter>
  );
};

export default Router;
