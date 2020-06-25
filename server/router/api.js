const db = require('../database/db');
const express = require('express');
const { seedItems } = require('../database/seed');
const router = express.Router();

router.get('/', (req, res) => {
  db.query('select * from items', (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

router.get('/droptable', (req, res) => {
  let dropTable = 'DROP TABLE items';
  db.query(dropTable, (err, result) => {
    if (err) throw err;
    console.log('dropped table');
  });
  res.status(200).send('tableを無事に消しました');
});

router.get('/createtable', (req, res) => {
  let createTables =
    'CREATE TABLE items (id SERIAL PRIMARY KEY, name VARCHAR(255), url VARCHAR(255), description VARCHAR(255))';
  db.query(createTables, (err, result) => {
    if (err) throw err;
    console.log('created table');
  });
  res.status(200).send('tableを無事に作りました');
});

router.get('/seed', (req, res) => {
  seedItems();
  res.status(200).send('seedを完了しました');
});

module.exports = router;
