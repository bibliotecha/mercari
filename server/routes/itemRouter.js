const express = require('express');
const {
  getAllItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} = require('../services/itemServices');

const router = express.Router();

router.route('/').get(getAllItems).post(createItem);
router.route('/items/:id').get(getItem).patch(updateItem).delete(deleteItem);

module.exports = router;
