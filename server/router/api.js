const db = require('../database/db');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  db.query('select * from items', (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

module.exports = router;
