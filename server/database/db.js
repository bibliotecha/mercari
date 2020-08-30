const mysql = require('mysql');

const config = require('../config');

console.log('host', config.host);
console.log('user', config.user);
console.log('port', config.port);
console.log('password', config.password);
console.log('database', config.db);
console.log('port', config.port);

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

module.exports = pool;
