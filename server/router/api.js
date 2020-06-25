const pool = require('../database/db');
const express = require('express');
const { db } = require('../config');
const { seedItems } = require('../database/seed');
// const { seedItems } = require('../database/seed');
const router = express.Router();

router.get('/', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query('SELECT * FROM items', (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
    connection.release();
  });
});

router.get('/droptable', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query('DROP TABLE items', (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
    connection.release();
  });
});

router.get('/createtable', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      'CREATE TABLE items (id SERIAL PRIMARY KEY, name VARCHAR(255), url VARCHAR(255), description VARCHAR(255))',
      (err, result) => {
        if (err) throw err;
        res.status(200).json('テーブルの作成に成功しました');
      }
    );
    connection.release();
  });
});

router.get('/seed', (req, res) => {
  seedItems();
});

module.exports = router;
