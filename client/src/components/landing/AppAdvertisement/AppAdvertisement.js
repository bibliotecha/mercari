import React from 'react';

// Css
import './AppAdvertisement.styles.css';

// イメージ
import AppIcon from '../../../assets/img/mercari_app_icon.png';

export const AppAdvertisement = () => {
  return (
    <section class='app__advertisement'>
      <div class='app__advertisement--icon'>
        <img src={AppIcon} alt='app_icon' />
      </div>
      <div class='app__advertisement--text'>
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
