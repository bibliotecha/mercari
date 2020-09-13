const express = require('express');
const fs = require('fs');
const app = express();
const port = 4000;

app.use(express.json());

const data = JSON.parse(
  fs.readFileSync('./data.json', (data) => {
    data;
  })
);

app.get('/items', (req, res) => {
  return res.status(200).json({
    status: 'successful',
    data,
  });
});

app.get('/items/:id', (req, res) => {
  console.log(req.params);
});

app.post('/items', (req, res) => {
  console.log(req.body);
  const newId = data.items[data.items.length - 1].id + 1;
  const newItem = Object.assign({}, { id: newId }, req.body);
  // ファイル内の配列に追加
  data.items.push(newItem);
  fs.writeFileSync('./data.json', JSON.stringify(data), (err, data) => {
    res.status(201).json({
      status: 'success',
      data: {
        items: newItem,
      },
    });
  });
  //res.send('Done'); // レスポンスが２度送られるためエラーが出る
});

app.listen(port, () => {
  console.log('サーバーが立ち上がりました');
});
