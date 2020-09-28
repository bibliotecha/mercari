const express = require('express');
const ItemServices = require('../services/itemServices');
const CommonMiddleware = require('../middleware/commonMiddleware');
const ItemMiddleware = require('../middleware/itemMiddleware');
const router = express.Router();

router.param('id', CommonMiddleware.checkID);

router
  .route('/')
  .get(ItemServices.getItems)
  .post(ItemMiddleware.validateItem, ItemServices.createItem);
router
  .route('/:id')
  .get(ItemServices.getItem)
  .patch(ItemServices.updateItem)
  .delete(ItemServices.deleteItem);

module.exports = router;
