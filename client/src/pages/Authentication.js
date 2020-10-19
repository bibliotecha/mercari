import React from 'react';
import '../styles/pages.css';

import { AuthHeader } from '../components/Auth/AuthHeader';
import { AuthFooter } from '../components/Auth/AuthFooter';

const AuthenticationPage = ({ children }) => {
  return (
    <div className='auth'>
      <AuthHeader />
      {children}
      <AuthFooter />
    </div>
  );
};

export default AuthenticationPage;
