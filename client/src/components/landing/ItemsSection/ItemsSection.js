import React, { useState, useEffect } from 'react';

// Img
import ItemIcon from '../../../assets/img/mercari_item.jpg';

// Css
import './ItemsSection.styles.css';

export const Items = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://mercari-app-lesson.herokuapp.com/api/'
        );
        const resJson = await res.json();
        setItems(resJson);
      } catch (err) {
        throw err;
      }
    }
    fetchData();
  }, []);

  return (
    <section className='item__layout'>
      <div className='section__header'>
        <div className='section__header--title'>
          <p>人気のカテゴリー</p>
        </div>
        <div className='section__scrollable'>
          <ul className='section__categories'>
            <li className='section__category'>
              <p>レディース</p>
            </li>
            <li className='section__category'>
              <p>メンズ</p>
            </li>
            <li className='section__category'>
              <p>家電・スマホ・カメラ</p>
            </li>
            <li className='section__category'>
              <p>おもちゃ・ホビー・グッズ</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='section__body'>
        <div className='section__body__header'>
          <div className='section__body__header--title'>
            <p>レディース新着アイテム</p>
          </div>
          <div className='section__body__header--more'>
            <div className='more__text'>
              <p>もっと見る</p>
            </div>
            <div className='more__arrow'>
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
        <div className='section__items'>
          {items &&
            items.map((item) => {
              return (
                <div className='section__item'>
                  <img className='image' src={item.url} alt='item' />
                  <div className='text'>
                    <p>{item.name}</p>
                  </div>
                </div>
              );
            })}
          {/* <div className='section__item'>
            <img className='image' src={ItemIcon} alt='item' />
            <div className='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div className='section__item'>
            <img className='image' src={ItemIcon} alt='item' />
            <div className='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div className='section__item'>
            <img className='image' src={ItemIcon} alt='item' />
            <div className='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div className='section__item'>
            <img className='image' src={ItemIcon} alt='item' />
            <div className='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div className='section__item'>
            <img className='image' src={ItemIcon} alt='item' />
            <div className='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div className='section__item'>
            <img className='image' src={ItemIcon} alt='item' />
            <div className='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div className='section__item'>
            <img className='image' src={ItemIcon} alt='item' />
            <div className='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div className='section__item'>
            <img className='image' src={ItemIcon} alt='item' />
            <div className='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div>
          <div className='section__item tablet'>
            <img className='image' src={ItemIcon} alt='item' />
            <div className='text'>
              <p>レイバン　ウェイファーラー</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
