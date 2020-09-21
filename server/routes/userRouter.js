const express = require('express');
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../services/userServices');

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/users/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
