import React, { useState } from 'react';
import { FacebookButton } from './FacebookButton';
import { GoogleButton } from './GoogleButton';
import { AppleButton } from './AppleButton';
import { useHistory } from 'react-router-dom';
import './Login.styles.css';

export const Login = () => {
  const history = useHistory();
  const [info, setInfo] = useState({
    email: '',
    password: '',
    error: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/users/login', {
      // credentials: 'include',
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:4000',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });
    const resJson = await response.json();

    if (resJson.status === 'success') {
      // add token to local storage(?)
      localStorage.setItem('token', resJson.token);
      history.push('/');
    }
    setInfo({ ...info, error: resJson.message });
  };
  return (
    <>
      <div className='login'>
        <div className='login--inner'>
          <div className='login__content'>
            <div className='login__header'>
              <div className='login__header--inner'>
                <div style={{ width: 300 }}>
                  <div>
                    <p style={{ fontSize: 15 }}>
                      アカウントをお持ちでない方はこちら
                    </p>
                  </div>
                  <div className='login__signup'>
                    <a href='/signup' className='login__signup--anchor'>
                      <div className='login__signup--content'>
                        <h3 style={{ fontSize: 14, color: 'white' }}>
                          新規会員登録
                        </h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='buttons'>
              <div className='button__wrapper'>
                <GoogleButton />
              </div>
              <div className='button__wrapper'>
                <FacebookButton />
              </div>
              <div className='button__wrapper'>
                <AppleButton />
              </div>
              <div>{info.error}</div>
              <form
                method='post'
                onSubmit={handleSubmit}
                style={{ width: '100%' }}>
                <div style={{ marginTop: 30, width: '100%' }}>
                  <div style={{ margin: '10px 0' }}>
                    <input
                      onChange={(e) =>
                        setInfo({ ...info, email: e.target.value })
                      }
                      value={info.email}
                      className='form__input'
                      type='text'
                      placeholder='メールアドレス'
                    />
                  </div>
                  <div style={{ margin: '10px 0' }}>
                    <input
                      onChange={(e) =>
                        setInfo({ ...info, password: e.target.value })
                      }
                      value={info.password}
                      className='form__input'
                      type='text'
                      placeholder='パスワード'
                    />
                  </div>
                </div>
                <div className='button__block'>
                  <a href='/signup' className='button__anchor'>
                    <div className='button__content'>
                      <input type='submit' value='ログイン' />
                    </div>
                  </a>
                </div>
              </form>
              <div style={{ width: '100%', margin: '8px 0' }}>
                <a href='/signup' className='forgot__password'>
                  パスワードをお忘れの方
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
