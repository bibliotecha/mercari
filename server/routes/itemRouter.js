const express = require('express');

const router = express.Router();

router.route('/').get(getAllItems).post(createItem);
router.route('/items/:id').get(getItem).patch(updateItem).delete(deleteItem);

module.exports = router;
