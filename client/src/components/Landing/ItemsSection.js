import React, { useState, useEffect } from 'react';
import config from '../../config';
import './ItemsSection.styles.css';
import { Heart } from '../../assets/svg';

export const Items = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(config.api_url, {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'POST, GET',
          },
        });
        const resJson = await res.json();
        setItems(resJson);
      } catch (err) {
        throw err;
      }
    }
    fetchData();
  }, []);

  return (
    <section class='items-section'>
      <div class='items-section__top'>
        <div class='items-section__title'>
          <h3>人気のカテゴリー</h3>
        </div>
        <ul class='items-section__categories'>
          <li>
            <a href='#ladies'>レディース</a>
          </li>
          <li>
            <a href='#mens'>メンズ</a>
          </li>
          <li>
            <a href='#electronics'>家電・スマホ・カメラ</a>
          </li>
          <li>
            <a href='#toys'>おもちゃ・ホビー・グッズ</a>
          </li>
        </ul>
      </div>
      <div id='ladies' class='items-section__bottom'>
        <div class='items-section__bottom-inner'>
          <div class='items-section__product--title'>
            <div class='items-section__category--text'>
              <h4>レディース新着アイテム</h4>
            </div>
            <div class='items-section__category--more'>
              <a href='/'>もっと見る</a>
              <svg
                width='16'
                height='16'
                fill='#0095ee'
                fill-rule='evenodd'
                viewBox='0 0 24 24'
                aria-hidden='true'
                class='items-section__category--svg'>
                <path d='M9,19a.7.7,0,0,1-.49-.2.69.69,0,0,1,0-1l5.62-5.63a.28.28,0,0,0,.09-.21.27.27,0,0,0-.09-.2L8.6,6.19a.7.7,0,1,1,1-1l5.58,5.58A1.71,1.71,0,0,1,15.66,12a1.73,1.73,0,0,1-.49,1.2L9.54,18.8A.74.74,0,0,1,9,19Z'></path>
              </svg>
            </div>
          </div>
          <div class='items-section__product--container'>
            <ul>
              {items.map((item, index) => {
                if (index === 9) {
                  return (
                    <li>
                      <a href='http://www.google.com'>
                        <div class='card card-none'>
                          <div class='card__preview'>
                            <div class='card__preview--price'>
                              <div class='card__preview--text'>
                                <p>¥6666</p>
                              </div>
                            </div>
                            <img src={item.url} alt='' />
                          </div>

                          <div class='card__caption'>
                            <div class='card__caption-description'>
                              <span>{item.name}</span>
                              <div class='card__caption-likes'>
                                <div>
                                  <label class='like'>
                                    <i class='material-icons' id='heart'></i>
                                    <div class='ripple'></div>
                                  </label>
                                </div>
                                <div class='favourite-counter'>
                                  <span id='count'>0</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <a href='http://www.google.com'>
                        <div class='card'>
                          <div class='card__preview'>
                            <div class='card__preview--price'>
                              <div class='card__preview--text'>
                                <p>¥6666</p>
                              </div>
                            </div>
                            <img src={item.url} alt='' />
                          </div>

                          <div class='card__caption'>
                            <div class='card__caption-description'>
                              <span>{item.description}</span>
                              <div class='card__caption-likes'>
                                <div class='card__like-icon'>
                                  <Heart />
                                </div>
                                <div class='card__like-text'>
                                  <span id='count'>0</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
