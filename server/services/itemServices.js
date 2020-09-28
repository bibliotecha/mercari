const db = require('../db');

const fs = require('fs');
const path = require('path');
const { items } = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data.json'))
);

exports.getAllItems = async (req, res) => {
  const items = await db.query('select * from items');
  console.log('items', items);
  // return res.status(200).json({
  //   status: 'successful',
  //   data: items,
  // });
};

exports.getItem = (req, res) => {
  const id = parseInt(req.params.id);

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
  const newId = items[items.length - 1].id + 1;
  const newItem = Object.assign({}, { id: newId }, req.body);
  // ファイル内の配列に追加
  items.push(newItem);

  fs.writeFileSync(
    path.join(__dirname, '../data.json'),
    JSON.stringify({ items })
  );
  res.status(201).json({
    status: 'success',
    data: {
      items: newItem,
    },
  });
};

exports.updateItem = (req, res) => {
  const id = parseInt(req.params.id);

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
