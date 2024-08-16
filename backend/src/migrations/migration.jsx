// migrations/migration.js
const db = require('../config/database.jsx');

const createTable = `CREATE TABLE IF NOT EXISTS customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  level ENUM('Juragan', 'Warga', 'Sultan', 'Konglomerat') NOT NULL,
  favoriteMenu VARCHAR(100),
  totalTransaction DECIMAL(10, 2)
)`;

db.query(createTable, (err) => {
  if (err) throw err;
  console.log('Table customers created.');
  process.exit();
});
