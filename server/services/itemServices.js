const db = require('../db');

exports.getItems = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM item');
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
    const result = await db.query('SELECT * FROM item WHERE id=$1', [numberId]);
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
      'INSERT INTO item (imgUrl, price, description) VALUES ($1, $2, $3) returning *',
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

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const numberId = parseInt(id);

  try {
    const result = await db.query(
      'UPDATE item SET imgUrl=$1, price=$2, description=$3 WHERE id=$4 returning *',
      [req.body.imgUrl, req.body.price, req.body.description, numberId]
    );

    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  const numberId = parseInt(id);

  try {
    const result = await db.query('DELETE FROM item where id=$1 returning *', [
      numberId,
    ]);
    if (result.rows.length === 0) {
      // 途中でレスポンスを返す際には必ずreturnをつけてあげる
      return res.status(400).json({
        status: 'fail',
        message: "id doesn't exist",
      });
    }
    res.status(200).json({
      status: 'success',
    });
  } catch {
    res.status(400).json({
      status: 'fail',
      message: 'something went wrong',
    });
  }
};
