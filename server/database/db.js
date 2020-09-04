const mysql = require('mysql');

const config = require('../config');

const pool = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000,
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.db,
});

async function execute(data) {
  return new Promise((resolve, reject) => {
    pool.query(data, (err, rows) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
}

module.exports = {
  execute,
  pool: pool.promise,
};
