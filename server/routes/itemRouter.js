const express = require('express');
const ItemServices = require('../services/itemServices');

const router = express.Router();

router.route('/').get(ItemServices.getAllItems).post(ItemServices.createItem);
router
  .route('/items/:id')
  .get(ItemServices.getItem)
  .patch(ItemServices.updateItem)
  .delete(ItemServices.deleteItem);

module.exports = router;
