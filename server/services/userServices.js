const { db } = require('../db');

exports.signup = (req, res) => {
  console.log('signup body', req.body);
  // if there is email
  // error response
  try {
    const result = await db.query('SELECT * FROM user WHERE email=$1 AND password=$2', [req.body.email. req.body.password])
    console.log(result)
    // attach cookie
    res.status(200).json({
      status: ''
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: 'error happened on the server'
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
    message: 'route is not yet defined',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined',
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'route is not yet defined',
  });
};
