/**
 * Expressでサーバーの元となるアプリを作成するファイル
 *
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const itemRouter = require('./routes/itemRouter');
const userRouter = require('./routes/userRouter');

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/items', itemRouter);
app.use('/users', userRouter);

module.exports = app;
