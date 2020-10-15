import React from 'react';
import { EmailButton } from './EmailButton';
import { FacebookButton } from './FacebookButton';
import { GoogleButton } from './GoogleButton';
import { AppleButton } from './AppleButton';

export const AuthContent = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <div
        style={{
          width: '100%',
          backgroundColor: 'white',
          maxWidth: 700,
          paddingBottom: 50,
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <div
            style={{
              width: '100%',
              borderBottom: '0.5px solid #F5F5F5',
              padding: '20px 0',
              textAlign: 'center',
            }}>
            <h5 style={{ fontSize: 20 }}>新規会員登録</h5>
          </div>
          <div
            style={{
              width: 300,
              padding: '30px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
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
