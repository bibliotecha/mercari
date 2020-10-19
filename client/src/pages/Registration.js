import React from 'react';
import { AuthFooter } from '../components/Auth/AuthFooter';
import { AuthHeader } from '../components/Auth/AuthHeader';

const Registration = () => {
  return (
    <div className='auth'>
      <AuthHeader />
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
            maxWidth: 700,
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
              <h5 style={{ fontSize: 20 }}>会員情報入力</h5>
            </div>
            <div
              style={{
                width: '100%',
                maxWidth: 700,
                backgroundColor: 'white',
                margin: '0 auto',
              }}>
              <form>
                <div>
                  <label for='nickname'>ニックネーム</label>
                  <input id='nickname' type='text' placeholder='例）山田太郎' />
                </div>
                <div>
                  <label for='email'>メールアドレス</label>
                  <input id='nickname' type='text' placeholder='例）山田太郎' />
                </div>
                <div>
                  <label for='password'>パスワード</label>
                  <input
                    id='password'
                    type='text'
                    placeholder='７文字以上の半角英数字'
                  />
                </div>
                <div>
                  <p>※ 英字と数字の両方を含めて設定してください</p>
                </div>
                <div>
                  <input type='checkbox' />
                  <p>パスワードを表示する</p>
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
                    <input
                      type='text'
                      name='firstName'
                      placeholder='例）山田'
                    />
                    <input type='text' name='lastName' placeholder='例）彩' />
                  </div>
                </div>
                <div>
                  <div>
                    <p>お名前（全角）</p>
                  </div>
                  <div>
                    <input
                      type='text'
                      name='firstNameKana'
                      placeholder='例）山田'
                    />
                    <input
                      type='text'
                      name='lastNameKana'
                      placeholder='例）彩'
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <p>生年月日</p>
                  </div>
                  <div>
                    <input type='datetime' name='year' />
                    <input type='month' name='month' />
                    <input type='day' name='day' />
                  </div>
                </div>
                <div>
                  <p>
                    ※
                    本人情報は正しく入力してください。会員登録後、修正するにはお時間を頂く場合があります。
                  </p>
                </div>
                <div>
                  <button onClick={() => console.log('next step')} />
                </div>
                <div>
                  <p>本人情報の登録について</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <AuthFooter />
    </div>
  );
};

export default Registration;
