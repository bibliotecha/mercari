require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const { seedItems } = require('./database/seed');

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: 'mercari',
  post: 3307,
});

db.connect((err) => {
  if (err) {
    console.error(`error connectin: ${err.stack}`);
  }

  console.log(`connected as id ${db.threadId}`);

  let dropTable = 'DROP TABLE items';
  db.query(dropTable, (err, result) => {
    if (err) throw err;
    console.log('dropped table');
  });

  let createTables =
    'CREATE TABLE items (id SERIAL PRIMARY KEY, name VARCHAR(255), description VARCHAR(255))';
  db.query(createTables, (err, result) => {
    if (err) throw err;
    console.log('created table');
  });

  seedItems(db);
});

/**
 * サーバーのインスタンスを定義
 */
const app = express();

/**
 * 使えるポートを確保
 */
const PORT = 4000;

app.get('/', (req, res) => {
  db.query('select * from items', (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

//　3000というポートにリクエストが来たら対応してください
app.listen(PORT, () => {
  // ``で囲むことにより変数を入れられる
  console.log(`server is listening on port ${PORT}`);
});
