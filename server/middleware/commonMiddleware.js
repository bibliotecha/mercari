const fs = require('fs');
const { items } = JSON.parse(fs.readFileSync('./data.json'));

exports.checkID = (req, res, next, val) => {
  if (val > items.length || val < 0) {
    return res.status(404).json({
      status: 'fail',
      message: 'ID was out of range',
    });
  }
  next();
};
