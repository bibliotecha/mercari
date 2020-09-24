const express = require('express');
const ItemServices = require('../services/itemServices');
const ItemMiddleware = require('../middleware/commonMiddleware');
const router = express.Router();

router.param('id', ItemMiddleware.checkID);

router.route('/').get(ItemServices.getAllItems).post(ItemServices.createItem);
router
  .route('/:id')
  .get(ItemServices.getItem)
  .patch(ItemServices.updateItem)
  .delete(ItemServices.deleteItem);

module.exports = router;
