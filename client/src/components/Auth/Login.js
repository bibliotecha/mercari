import React from 'react';
import { EmailButton } from './EmailButton';
import { FacebookButton } from './FacebookButton';
import { GoogleButton } from './GoogleButton';
import { AppleButton } from './AppleButton';

export const Login = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <div
        style={{
          width: '100%',
          backgroundColor: 'white',
          maxWidth: 500,
          paddingBottom: 50,
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <div
            style={{
              width: '100%',
              borderBottom: '0.5px solid #F5F5F5',
              padding: '20px 0',
              textAlign: 'center',
            }}>
            <div
              style={{
                width: '100%',
                padding: '30px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}>
              <div style={{ width: 300 }}>
                <div>
                  <p style={{ fontSize: 15 }}>
                    アカウントをお持ちでない方はこちら
                  </p>
                </div>
                <div style={{ width: '100%', margin: '8px 0' }}>
                  <a
                    href='/signup'
                    style={{
                      display: 'block',
                      borderRadius: 3,
                      backgroundColor: '#3399E8',
                      border: '1px solid #3399E8',
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
                      <div style={{ fontSize: 14, color: 'white' }}>
                        新規会員登録
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: 300,
              padding: '30px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <div style={{ width: '100%', margin: '8px 0' }}>
              <GoogleButton />
            </div>
            <div style={{ width: '100%', margin: '8px 0' }}>
              <FacebookButton />
            </div>
            <div style={{ width: '100%', margin: '8px 0' }}>
              <AppleButton />
            </div>
            <div style={{ marginTop: 30, width: '100%' }}>
              <div style={{ margin: '10px 0' }}>
                <input
                  style={{
                    width: '100%',
                    border: '1px solid #CCCCCC',
                    borderRadius: 3,
                    padding: 8,
                    fontSize: 16,
                  }}
                  type='text'
                  placeholder='メールアドレス'
                />
              </div>
              <div style={{ margin: '10px 0' }}>
                <input
                  style={{
                    width: '100%',
                    border: '1px solid #CCCCCC',
                    borderRadius: 3,
                    padding: 8,
                    fontSize: 16,
                  }}
                  type='text'
                  placeholder='パスワード'
                />
              </div>
            </div>
            <div style={{ width: '100%', margin: '8px 0' }}>
              <a
                href='/signup'
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
                  <div style={{ fontSize: 14, color: 'white' }}>ログイン</div>
                </div>
              </a>
            </div>
            <div style={{ width: '100%', margin: '8px 0' }}>
              <a
                href='/signup'
                style={{
                  color: '#349BE8',
                  display: 'block',
                }}>
                パスワードをお忘れの方
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
