/**
 * Expressのツールをファイル内で使えるようにします。
 */
const express = require('express');
/**
 * 'path'というモジュールをファイル内で使えるようにします
 */
const path = require('path');

/**
 * サーバーのインスタンスを定義
 */
const app = express();

/**
 * 使えるポートを確保
 */
const PORT = 3000;

// styles.cssを取り込む
app.use(express.static(path.join(__dirname, '../client/public')));

// 'localhost:3000 + '/'と入力する中の関数を呼ぶ
app.get('/', (req, res) => {
  // 一つ親の階層の'client'というフォルダに入る
  //　index.htmlというファイルがあるのでそれをブラウザに送ってください
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

//　3000というポートにリクエストが来たら対応してください
app.listen(PORT, () => {
  // ``で囲むことにより変数を入れられる
  console.log(`server is listening on port ${PORT}`);
});
