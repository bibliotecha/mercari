const mysql = require('mysql');
const { seedItems } = require('./seed');

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: 'mercari',
  post: 3307,
});

db.connect((err) => {
  if (err) {
    console.error(`error connectin: ${err.stack}`);
  }

  console.log(`connected as id ${db.threadId}`);

  let dropTable = 'DROP TABLE items';
  db.query(dropTable, (err, result) => {
    if (err) throw err;
    console.log('dropped table');
  });

  let createTables =
    'CREATE TABLE items (id SERIAL PRIMARY KEY, name VARCHAR(255), description VARCHAR(255))';
  db.query(createTables, (err, result) => {
    if (err) throw err;
    console.log('created table');
  });

  seedItems(db);
});

module.exports = db;
