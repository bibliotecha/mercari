const fs = require('fs');
const { items } = JSON.parse(fs.readFileSync('./data.json'));

exports.getAllItems = (_, res) => {
  return res.status(200).json({
    status: 'successful',
    data: items,
  });
};

exports.getItem = (req, res) => {
  const id = parseInt(req.params.id);

  if (id > items.length || id < 0) {
    res.status(404).json({
      status: 'fail',
      message: 'ID was out of range',
    });
  }

  item = items.find((item) => {
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

exports.createItem = (req, res) => {
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

exports.updateItem = (req, res) => {
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

exports.deleteItem = (req, res) => {
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
