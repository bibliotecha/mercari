const mysql = require('mysql');

const config = require('../config');

const db = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.db,
  post: config.port,
});

db.connect((err) => {
  if (err) {
    console.error(`error connectin: ${err.stack}`);
  }

  console.log(`connected as id ${db.threadId}`);
});

module.exports = db;
