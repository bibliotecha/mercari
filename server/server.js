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

app.use(cors());

app.use(express.json());

app.use('/api', apiRouter);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  ); // If needed
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  ); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  next();
});

//　3000というポートにリクエストが来たら対応してください
app.listen(config.port, () => {
  // ``で囲むことにより変数を入れられる
  console.log(`server is listening on port ${config.port}`);
});
