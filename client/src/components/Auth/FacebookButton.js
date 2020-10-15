import React from 'react';
import { Facebook } from '../../assets/svg';

export const FacebookButton = () => {
  return (
    <a
      href='/signup/registration'
      style={{
        display: 'block',
        borderRadius: 3,
        border: '1px solid black',
        backgroundColor: '#385185',
      }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          itemsCenter: 'center',
          justifyContent: 'center',

          padding: '12px 0',
        }}>
        <div style={{ position: 'absolute', left: 15 }}>
          <Facebook width={18} fill='white' />
        </div>
        <div style={{ fontSize: 14, color: 'white' }}>Facebookで登録</div>
      </div>
    </a>
  );
};
