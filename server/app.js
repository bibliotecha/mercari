/**
 * Expressでサーバーの元となるアプリを作成するファイル
 *
 */

const express = require('express');
const app = express();

const itemRouter = require('./routes/itemRouter');
const userRouter = require('./routes/userRouter');

app.use(express.json());

app.use('/items', itemRouter);
app.use('/users', userRouter);

module.exports = app;
