// db.js
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
  user: 'root',
  password: 'Jegan@007',
  database: 'wealth_empires',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = db;
