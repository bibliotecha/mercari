const pool = require('../database/db');
const express = require('express');
// const { seedItems } = require('../database/seed');
const router = express.Router();

router.get('/', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query('select * from items', (err, result) => {
      if (err) throw err;
      res.status(200).json(result);
    });
    connection.release();
  });
});

module.exports = router;
