const express = require('express');
const { getAllItems, insertItem } = require('../services/items');
const { createTable, dropTable } = require('../services/mysql');
const router = express.Router();
const { items } = require('../database/seed');

router.get('/', async (req, res) => {
  try {
    const items = await getAllItems();
    return res.status(200).json(items);
  } catch (err) {
    console.log(err);
  }
});

router.get('/droptable', async (req, res) => {
  try {
    await dropTable();
    return res.status(200).json('successfully dropped database');
  } catch (err) {
    console.log(err);
  }
});

router.get('/createtable', async (req, res) => {
  try {
    await createTable();
    return res.status(200).json('successfully created database');
  } catch (err) {
    console.log(err);
  }
});

router.get('/seed', async (req, res) => {
  try {
    for (let i = 0; i < items.length; i++) {
      await insertItem(items[i].name, items[i].url, items[i].description);
    }
    return res.status(200).json('無事にサンプルデータを入力しました');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
