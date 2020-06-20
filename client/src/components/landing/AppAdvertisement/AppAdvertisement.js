import React from 'react';

// Css
import './AppAdvertisement.styles.css';

// イメージ
import AppIcon from '../../../assets/img/mercari_app_icon.png';

export const AppAdvertisement = () => {
  return (
    <section className='app__advertisement'>
      <div className='app__advertisement--icon'>
        <img src={AppIcon} alt='app_icon' />
      </div>
      <div className='app__advertisement--text'>
        <div>
          <p>スマホでかんたんフリマアプリ</p>
        </div>
        <div>
          <p>今すぐ無料ダウンロード！</p>
        </div>
      </div>
    </section>
  );
};
