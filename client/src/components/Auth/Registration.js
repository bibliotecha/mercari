import React from 'react';

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
  };

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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: 300 }}>
                <form onSubmit={handleSubmit}>
                  <div>
                    <div>
                      <label for='nickname'>ニックネーム</label>
                    </div>
                    <div>
                      <input
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid #CCCCCC',
                          borderRadius: 3,
                          fontSize: 16,
                        }}
                        id='nickname'
                        type='text'
                        placeholder='例）山田太郎'
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label for='email'>メールアドレス</label>
                    </div>
                    <div>
                      <input
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid #CCCCCC',
                          borderRadius: 3,
                          fontSize: 16,
                        }}
                        id='nickname'
                        type='text'
                        placeholder='メールアドレス'
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label for='password'>パスワード</label>
                    </div>
                    <div>
                      <input
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid #CCCCCC',
                          borderRadius: 3,
                          fontSize: 16,
                        }}
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
                          style={{
                            width: '100%',
                            padding: 10,
                            border: '1px solid #CCCCCC',
                            borderRadius: 3,
                            fontSize: 16,
                          }}
                          type='text'
                          name='firstName'
                          placeholder='例）山田'
                        />
                      </div>
                      <div>
                        <input
                          style={{
                            width: '100%',
                            padding: 10,
                            border: '1px solid #CCCCCC',
                            borderRadius: 3,
                            fontSize: 16,
                          }}
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
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid #CCCCCC',
                          borderRadius: 3,
                          fontSize: 16,
                        }}
                        type='text'
                        name='firstNameKana'
                        placeholder='例）ヤマダ'
                      />
                      <input
                        style={{
                          width: '100%',
                          padding: 10,
                          border: '1px solid #CCCCCC',
                          borderRadius: 3,
                          fontSize: 16,
                          writingMode: 'none',
                        }}
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
                        style={{
                          display: 'inline-block',
                          //   width: '100%',
                          padding: 10,
                          border: '1px solid #CCCCCC',
                          borderRadius: 3,
                          fontSize: 16,
                        }}>
                        <option selected value='invalid'>
                          --
                        </option>
                        <option value='2020'>2020</option>
                        <option value='2019'>2019</option>
                        <option value='2018'>2018</option>
                      </select>
                      <div style={{ display: 'inline-block' }}>年</div>
                      <select
                        style={{
                          display: 'inline-block',
                          //   width: '100%',
                          padding: 10,
                          border: '1px solid #CCCCCC',
                          borderRadius: 3,
                          fontSize: 16,
                        }}>
                        <option selected value='invalid'>
                          --
                        </option>
                        <option value='12'>12</option>
                        <option value='11'>11</option>
                        <option value='10'>10</option>
                      </select>
                      <div style={{ display: 'inline-block' }}>月</div>
                      <select
                        style={{
                          display: 'inline-block',
                          //   width: '100%',
                          padding: 10,
                          border: '1px solid #CCCCCC',
                          borderRadius: 3,
                          fontSize: 16,
                        }}>
                        <option selected value='invalid'>
                          --
                        </option>
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
                    <input type='submit'>次へ進む</input>
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
    </div>
  );
};
