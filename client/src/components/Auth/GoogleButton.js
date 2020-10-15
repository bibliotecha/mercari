import React from 'react';
import { Google } from '../../assets/svg';

export const GoogleButton = () => {
  return (
    <a
      href='/signup/registration'
      style={{
        display: 'block',
        borderRadius: 3,
        border: '1px solid black',
        backgroundColor: 'transparent',
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
          <Google width={18} />
        </div>
        <div style={{ fontSize: 14 }}>Googleで登録</div>
      </div>
    </a>
  );
};
