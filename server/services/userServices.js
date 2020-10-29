const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

    const user = {
      nickname: req.body.nickname,
      email: req.body.email,
    };

    // create token
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);

    res.status(200).json({
      status: 'success',
      token: accessToken,
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

    const user = {
      nickname: result.rows[0].nickname,
      email: req.body.email,
    };

    // create token
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);

    res.status(200).json({
      status: 'success',
      token: accessToken,
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
