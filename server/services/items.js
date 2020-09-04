const db = require('../database/db');
const { seedItems } = require('../database/seed');

function getAllItems() {
  let query = `SELECT * FROM items`;
  return db.execute(query);
}

function getItemById(id) {
  let query = `SELECT * FROM item WHERE id=${id}`;
  return db.execute(query);
}

function insertItem(name, url, description) {
  let query = `INSERT INTO items (name, url, description) VALUES ('${name}', '${url}', '${description}')`;
  return db.execute(query);
}

module.exports = {
  getAllItems,
  insertItem,
};
