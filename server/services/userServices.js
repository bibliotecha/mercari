const db = require('../db');

exports.signup = async (req, res) => {
  // if there is email
  // error response
  try {
    console.log('entered', req.body.email, req.body.password);
    const result = await db.query(
      'SELECT * FROM "user" WHERE email=$1 AND password=$2',
      [req.body.email, req.body.password]
    );
    if (result.rows.length === 0) {
      res.status(400).json({
        status: 'fail',
        message: 'email or password is wrong',
      });
    }
    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
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
