const db = require('../db');

exports.signup = async (req, res) => {
  // if there is email
  // error response
  try {
    const result = await db.query('SELECT * FROM "user" WHERE email=$1', [
      req.body.email,
    ]);
    if (result.rows.length !== 0) {
      return res.status(400).json({
        status: 'fail',
        message: 'email exists',
      });
    }
    await db.query(
      'INSERT INTO "user" (nickname, email, password, "firstName", "lastName", "firstNameKana", "lastNameKana", year, month, day) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
      [
        req.body.nickname,
        req.body.email,
        req.body.password,
        req.body.firstName,
        req.body.lastName,
        req.body.firstNameKana,
        req.body.lastNameKana,
        req.body.year,
        req.body.month,
        req.body.day,
      ]
    );
    res.cookie('testcookie1', '1239090');
    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'error',
      message: 'error during the process',
    });
  }
};

exports.login = (req, res) => {
  // get email and password from data
  // if result not found
  // error response
  // give cookie
};

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined for getallusers',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined for createuser',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined for getuser',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined for updateuser',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined for deleteuser',
  });
};
