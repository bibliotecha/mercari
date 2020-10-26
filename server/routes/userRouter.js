const express = require('express');
const UserServices = require('../services/userServices');

const router = express.Router();

router.route('/').get(UserServices.getAllUsers).post(UserServices.createUser);
router.route('/signup').post(UserServices.signup);
router.route('/login').post(UserServices.login);

// router
//   .route('/:id')
//   .get(UserServices.getUser)
//   .patch(UserServices.updateUser)
//   .delete(UserServices.deleteUser);

module.exports = router;
