const bcrypt = require('bcrypt');
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
    // bcrypt hasing
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    console.log('hashedpassword', hashedPassword);

    await db.query(
      'INSERT INTO "user" (nickname, email, password, "firstName", "lastName", "firstNameKana", "lastNameKana", year, month, day) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
      [
        req.body.nickname,
        req.body.email,
        hashedPassword,
        req.body.firstName,
        req.body.lastName,
        req.body.firstNameKana,
        req.body.lastNameKana,
        req.body.year,
        req.body.month,
        req.body.day,
      ]
    );
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

exports.login = async (req, res) => {
  // get email and password from data
  try {
    const result = await db.query(`SELECT * FROM "user" WHERE email=$1`, [
      req.body.email,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'no such username exists',
      });
    }
    const matched = await bcrypt.compare(
      req.body.password,
      result.rows[0].password
    );
    if (!matched) {
      return res.status(400).json({
        status: 'fail',
        message: "the password didn't match",
      });
    }
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
