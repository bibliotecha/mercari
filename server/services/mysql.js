const db = require('../database/db');

function createTable() {
  let query = `CREATE TABLE items (id SERIAL PRIMARY KEY, name VARCHAR(255), url VARCHAR(255), description VARCHAR(255))`;
  return db.execute(query);
}

function dropTable() {
  let query = `DROP TABLE items`;
  return db.execute(query);
}

module.exports = {
  createTable,
  dropTable,
};
