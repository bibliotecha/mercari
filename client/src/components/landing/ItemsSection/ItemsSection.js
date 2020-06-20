import React from 'react';

// Img
import ItemIcon from '../../../assets/img/mercari_item.jpg';

// Css
import './ItemsSection.styles.css';

export const Items = () => {
  return (
    <section class='item__layout'>
      <div class='section__header'>
        <div class='section__header--title'>
          <p>人気のカテゴリー</p>
        </div>
        <div class='section__scrollable'>
          <ul class='section__categories'>
            <li class='section__category'>
              <p>レディース</p>
            </li>
            <li class='section__category'>
              <p>メンズ</p>
            </li>
            <li class='section__category'>
              <p>家電・スマホ・カメラ</p>
            </li>
            <li class='section__category'>
              <p>おもちゃ・ホビー・グッズ</p>
            </li>
            <li class='section__category'>
              <p>家電・スマホ・カメラ</p>
            </li>
          </ul>
        </div>
      </div>
      <div class='section__body'>
        <div class='section__body__header'>
          <div class='section__body__header--title'>
            <p>レディース新着アイテム</p>
          </div>
          <div class='section__body__header--more'>
            <div class='more__text'>
              <p>もっと見る</p>
            </div>
            <div class='more__arrow'>
              <svg viewBox='0 0 512.002 512.002'>
                <g>
                  <g>
                    <path
                      fill='#3295ee'
                      d='M388.425,241.951L151.609,5.79c-7.759-7.733-20.321-7.72-28.067,0.04c-7.74,7.759-7.72,20.328,0.04,28.067l222.72,222.105
                L123.574,478.106c-7.759,7.74-7.779,20.301-0.04,28.061c3.883,3.89,8.97,5.835,14.057,5.835c5.074,0,10.141-1.932,14.017-5.795
                l236.817-236.155c3.737-3.718,5.834-8.778,5.834-14.05S392.156,245.676,388.425,241.951z'
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class='section__items'>
          <div class='section__item'>
            <img class='image' src={ItemIcon} alt='item' />
            <div class='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div class='section__item'>
            <img class='image' src={ItemIcon} alt='item' />
            <div class='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div class='section__item'>
            <img class='image' src={ItemIcon} alt='item' />
            <div class='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div class='section__item'>
            <img class='image' src={ItemIcon} alt='item' />
            <div class='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div class='section__item'>
            <img class='image' src={ItemIcon} alt='item' />
            <div class='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div class='section__item'>
            <img class='image' src={ItemIcon} alt='item' />
            <div class='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div class='section__item'>
            <img class='image' src={ItemIcon} alt='item' />
            <div class='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div class='section__item'>
            <img class='image' src={ItemIcon} alt='item' />
            <div class='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div class='section__item'>
            <img class='image' src={ItemIcon} alt='item' />
            <div class='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
