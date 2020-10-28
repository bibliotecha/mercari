import React from 'react';
import { EmailButton } from './EmailButton';
import { FacebookButton } from './FacebookButton';
import { GoogleButton } from './GoogleButton';
import { AppleButton } from './AppleButton';
import './Signup.styles.css';

export const Signup = () => {
  return (
    <div className='signup'>
      <div className='signup__inner'>
        <div className='signup__content'>
          <div className='signup__header'>
            <h5 style={{ fontSize: 20 }}>新規会員登録</h5>
          </div>
          <div className='signup__buttons'>
            <div style={{ width: '100%', margin: '8px 0' }}>
              <EmailButton />
            </div>
            <div style={{ width: '100%', margin: '8px 0' }}>
              <GoogleButton />
            </div>
            <div style={{ width: '100%', margin: '8px 0' }}>
              <FacebookButton />
            </div>
            <div style={{ width: '100%', margin: '8px 0' }}>
              <AppleButton />
            </div>
            <div style={{ marginTop: 30 }}>
              <p style={{ color: '#A9A9A9', fontSize: 14 }}>
                登録することで、利用規約とプライバシーポリシーに同意したものとみなされます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
