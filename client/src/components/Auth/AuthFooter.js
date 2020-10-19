import React from 'react';
import './AuthFooter.styles.css';

export const AuthFooter = () => {
  return (
    <div style={{ width: 400, margin: '0 auto', padding: '50px 0 25px 0' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <div className='footer__links'>
          <div style={{ margin: '10px 4px 10px 4px', textAlign: 'center' }}>
            <a href='#' style={{ display: 'block', fontSize: 13 }}>
              プライバシーポリシー
            </a>
          </div>
          <div style={{ margin: '10px 4px 10px 4px', textAlign: 'center' }}>
            <a style={{ display: 'block', fontSize: 13 }}>メルカリ利用規約</a>
          </div>
          <div style={{ margin: '10px 4px 10px 4px', textAlign: 'center' }}>
            <a href='#' style={{ display: 'block', fontSize: 13 }}>
              特定商引に関する表記
            </a>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 0 10px 0',
          }}>
          <img
            width={70}
            src='https://pcweb-assets.mercdn.net/assets/img/common/common/logo-gray.svg?3216077856'
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <p style={{ fontSize: 13 }}>&copy; Mercari, Inc.</p>
        </div>
      </div>
    </div>
  );
};
