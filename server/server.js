require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: 'mercari',
  post: 3307,
});

connection.connect((err) => {
  if (err) {
    console.error(`error connectin: ${err.stack}`);
  }

  console.log(`connected as id ${connection.threadId}`);
});

/**
 * サーバーのインスタンスを定義
 */
const app = express();

/**
 * 使えるポートを確保
 */
const PORT = 3000;

//　3000というポートにリクエストが来たら対応してください
app.listen(PORT, () => {
  // ``で囲むことにより変数を入れられる
  console.log(`server is listening on port ${PORT}`);
});
