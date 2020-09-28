const db = require('../db');

const fs = require('fs');
const path = require('path');
const { items } = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data.json'))
);

exports.getItems = async (req, res) => {
  try {
    const result = await db.query('select * from items');
    return res.status(200).json({
      status: 'successful',
      results: result.rows.length,
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getItem = async (req, res) => {
  const { id } = req.params;
  const numberId = parseInt(id);

  try {
    // `${}`でも結果だけ見れば同じだが、ハッキングされる恐れがあるので以下のやり方にしよう
    const result = await db.query('select * from items where id=$1', [
      numberId,
    ]);
    if (!result.rows[0]) {
      res.status(400).json({
        status: 'failed',
        message: 'No items found with that id',
      });
    }
    res.status(200).json({
      status: 'success',
      data: result.rows[0],
    });
  } catch (err) {
    console.log(err);
  }
};

exports.createItem = async (req, res) => {
  try {
    const result = await db.query(
      'insert into items (imgUrl, price, description) values ($1, $2, $3) returning *',
      [req.body.imgUrl, req.body.price, req.body.description]
    );
    return res.status(200).json({
      status: 'success',
      data: result.rows,
    });
  } catch (err) {
    console.log(err);
  }
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
