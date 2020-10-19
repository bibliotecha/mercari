/**
 * Expressでサーバーの元となるアプリを作成するファイル
 *
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const itemRouter = require('./routes/itemRouter');
const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use(cors());

app.post('/signup/registration', (req, res) => {
  console.log('received message');
});

app.use('/items', itemRouter);
app.use('/users', userRouter);

module.exports = app;
