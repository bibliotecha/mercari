require('dotenv').config();
require('./database/db');
const config = require('./config');
const express = require('express');
const apiRouter = require('./router/api');
const cors = require('cors');

/**
 * サーバーのインスタンスを定義
 */
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(cors());

app.use('/api', apiRouter);

//　3000というポートにリクエストが来たら対応してください
app.listen(config.port, () => {
  // ``で囲むことにより変数を入れられる
  console.log(`server is listening on port ${config.port}`);
});
