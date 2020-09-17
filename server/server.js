const express = require('express');
const fs = require('fs');
const app = express();
const port = 4000;

app.use(express.json());

const { items } = JSON.parse(fs.readFileSync('./data.json'));

const getAllItems = (_, res) => {
  return res.status(200).json({
    status: 'successful',
    data,
  });
};

const getItem = (req, res) => {
  const id = parseInt(req.params.id);

  if (id > items.length || id < 0) {
    res.status(404).json({
      status: 'fail',
      message: 'ID was out of range',
    });
  }

  const item = items.find((item) => {
    console.log('item', item);
    return item.id === id;
  });

  if (!item) {
    res.status(404).json({
      status: 'fail',
      message: 'No such ID was found by that ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: item,
  });
};

const createItem = (req, res) => {
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
};

const updateItem = (req, res) => {
  const id = parseInt(req.params.id);
  if (id > items.length || id < 0) {
    res.status(404).json({
      status: 'fail',
      message: 'ID was out of range',
    });
  }

  const item = items.find((item) => {
    console.log('item', item);
    return item.id === id;
  });

  if (!item) {
    res.status(404).json({
      status: 'fail',
      message: 'No such ID was found by that ID',
    });
  }
  res.status(200).json({
    status: 'success',
  });
};

const deleteItem = (req, res) => {
  const id = parseInt(req.params.id);
  if (id > items.length || id < 0) {
    res.status(404).json({
      status: 'fail',
      message: 'ID was out of range',
    });
  }

  const item = items.find((item) => {
    console.log('item', item);
    return item.id === id;
  });

  if (!item) {
    res.status(404).json({
      status: 'fail',
      message: 'No such ID was found by that ID',
    });
  }
  res.status(200).json({
    status: 'success',
  });
};

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined',
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined',
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined',
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined',
  });
};

// １行で置き換えられる
app.route('/items').get(getAllItems).post(createItem);
app.route('/items/:id').get(getItem).patch(updateItem).delete(deleteItem);
app.route('/users').get(getAllUsers).post(createUser);
app.route('/users/:id').get(getUser).patch(updateUser).delete(deleteUser);

app.listen(port, () => {
  console.log('サーバーが立ち上がりました');
});
