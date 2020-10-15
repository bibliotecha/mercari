import React from 'react';
import '../styles/pages.css';

import { AuthHeader } from '../components/Auth/AuthHeader';
import { AuthContent } from '../components/Auth/AuthContent';
import { AuthFooter } from '../components/Auth/AuthFooter';

const AuthenticationPage = () => {
  return (
    <div className='auth'>
      <AuthHeader />
      <AuthContent />
      <AuthFooter />
    </div>
  );
};

export default AuthenticationPage;
