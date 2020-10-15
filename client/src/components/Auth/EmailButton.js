import React from 'react';
import { Email } from '../../assets/svg';

export const EmailButton = () => {
  return (
    <a
      href='/signup/registration'
      style={{
        display: 'block',
        borderRadius: 3,
        backgroundColor: '#EA352E',
        border: '1px solid #EA352E',
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
          <Email width={20} fill='white' />
        </div>
        <div style={{ fontSize: 14, color: 'white' }}>メールアドレスで登録</div>
      </div>
    </a>
  );
};
