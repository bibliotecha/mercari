const express = require('express');
const fs = require('fs');
const app = express();
const port = 4000;

const itemRouter = require('./routes/itemRouter');
const userRouter = require('./routes/userRouter');

app.use(express.json());

app.use('/items', itemRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log('サーバーが立ち上がりました');
});
