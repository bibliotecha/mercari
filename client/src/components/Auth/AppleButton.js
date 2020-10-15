import React from 'react';
import { Apple } from '../../assets/svg';

export const AppleButton = () => {
  return (
    <a
      href='/signup/registration'
      style={{
        display: 'block',
        borderRadius: 3,
        border: '1px solid black',
        backgroundColor: '#000000',
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
          <Apple width={18} fill='white' />
        </div>
        <div style={{ fontSize: 14, color: 'white' }}>Appleで登録</div>
      </div>
    </a>
  );
};
