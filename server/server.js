require('dotenv').config();
require('./database/db');
const express = require('express');
const apiRouter = require('./router/api');
const cors = require('cors');

/**
 * サーバーのインスタンスを定義
 */
const app = express();

/**
 * 使えるポートを確保
 */
const PORT = process.env.PORT | 4000;

app.use(cors());

app.use('/api', apiRouter);

//　3000というポートにリクエストが来たら対応してください
app.listen(PORT, () => {
  // ``で囲むことにより変数を入れられる
  console.log(`server is listening on port ${PORT}`);
});
