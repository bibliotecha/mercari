import React from 'react';
import { useState } from 'react';
import './Registration.styles.css';

export const Registration = () => {
  const [info, setInfo] = useState({
    nickname: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    firstNameKana: '',
    lastNameKana: '',
    year: '',
    month: '',
    day: '',
  });
  //　inlineで書くよりもここで宣言した方がいい
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch('http://localhost:4000/users/signup', {
      method: 'POST',
      // credentials: 'include',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:4000',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });
    console.log('handle result', result);
  };

  return (
    <div className='registration'>
      <div className='registration__inner'>
        <div className='registration__header'>
          <h5 style={{ fontSize: 20 }}>会員情報入力</h5>
        </div>
        <div className='registration__content'>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 300 }}>
              <form
                action='localhost:4000/signup/registration'
                method='post'
                onSubmit={handleSubmit}>
                <div>
                  <div>
                    <label htmlFor='nickname'>ニックネーム</label>
                  </div>
                  <div>
                    <input
                      className='form__input'
                      onChange={(e) =>
                        setInfo({ ...info, nickname: e.target.value })
                      }
                      value={info.nickname}
                      id='nickname'
                      type='text'
                      placeholder='例）山田太郎'
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor='email'>メールアドレス</label>
                  </div>
                  <div>
                    <input
                      onChange={(e) =>
                        setInfo({ ...info, email: e.target.value })
                      }
                      value={info.email}
                      className='form__input'
                      id='nickname'
                      type='text'
                      placeholder='メールアドレス'
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor='password'>パスワード</label>
                  </div>
                  <div>
                    <input
                      onChange={(e) =>
                        setInfo({ ...info, password: e.target.value })
                      }
                      value={info.password}
                      className='form__input'
                      id='password'
                      type='text'
                      placeholder='７文字以上の半角英数字'
                    />
                  </div>
                </div>
                <div>
                  <p>※ 英字と数字の両方を含めて設定してください</p>
                </div>
                <div>
                  <div>
                    <input type='checkbox' />
                  </div>
                  <div>
                    <p>パスワードを表示する</p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>本人確認</p>
                  </div>
                  <div>
                    <p>
                      安心・安全にご利用いただくために、お客さまの本人情報の登録にご協力ください。他のお客さまに公開されることはありません。
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>お名前（全角）</p>
                  </div>
                  <div>
                    <div>
                      <input
                        onChange={(e) =>
                          setInfo({ ...info, firstName: e.target.value })
                        }
                        className='form__input'
                        value={info.firstName}
                        type='text'
                        name='firstName'
                        placeholder='例）山田'
                      />
                    </div>
                    <div>
                      <input
                        onChange={(e) =>
                          setInfo({ ...info, lastName: e.target.value })
                        }
                        className='form__input'
                        value={info.lastName}
                        type='text'
                        name='lastName'
                        placeholder='例）彩'
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <p>お名前カナ（全角）</p>
                  </div>
                  <div>
                    <input
                      onChange={(e) =>
                        setInfo({ ...info, firstNameKana: e.target.value })
                      }
                      className='form__input'
                      value={info.firstNameKana}
                      type='text'
                      name='firstNameKana'
                      placeholder='例）ヤマダ'
                    />
                    <input
                      onChange={(e) =>
                        setInfo({ ...info, lastNameKana: e.target.value })
                      }
                      className='form__input'
                      value={info.lastNameKana}
                      type='text'
                      name='lastNameKana'
                      placeholder='例）アヤ'
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <p>生年月日</p>
                  </div>
                  <div>
                    <select
                      defaultValue='invalid'
                      onChange={(e) =>
                        setInfo({ ...info, year: e.target.value })
                      }
                      className='form__input'>
                      <option value='invalid'>--</option>
                      <option value='2020'>2020</option>
                      <option value='2019'>2019</option>
                      <option value='2018'>2018</option>
                    </select>
                    <div style={{ display: 'inline-block' }}>年</div>
                    <select
                      defaultValue='invalid'
                      onChange={(e) =>
                        setInfo({ ...info, month: e.target.value })
                      }
                      className='form__input'>
                      <option value='invalid'>--</option>
                      <option value='12'>12</option>
                      <option value='11'>11</option>
                      <option value='10'>10</option>
                    </select>
                    <div style={{ display: 'inline-block' }}>月</div>
                    <select
                      onChange={(e) =>
                        setInfo({ ...info, day: e.target.value })
                      }
                      defaultValue='invalid'
                      className='form__input'>
                      <option value='invalid'>--</option>
                      <option value='31'>31</option>
                      <option value='30'>30</option>
                      <option value='29'>29</option>
                    </select>
                    <div style={{ display: 'inline-block' }}>日</div>
                  </div>
                </div>
                <div>
                  <p>
                    ※
                    本人情報は正しく入力してください。会員登録後、修正するにはお時間を頂く場合があります。
                  </p>
                </div>
                <div>
                  <input type='submit' name='submit' />
                </div>
                <div>
                  <p>本人情報の登録について</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
