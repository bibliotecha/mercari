const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres', //　デフォルト
  host: 'localhost', // デフォルト
  database: 'mercari',
  password: 'password',
  port: 5432, // デフォルト
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
