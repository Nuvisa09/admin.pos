// seeders/seeder.js
const db = require('../config/database.jsx');

const customer = [
  { name: 'John Doe', level: 'Juragan', favoriteMenu: 'Pizza', totalTransaction: 500 },
  { name: 'Jane Smith', level: 'Warga', favoriteMenu: 'Burger', totalTransaction: 300 },
  // Tambahkan data lainnya sesuai kebutuhan
];

const insertCustomers = `INSERT INTO customer (name, level, favoriteMenu, totalTransaction) VALUES ?`;

db.query(insertCustomers, [customer.map(customer => [customer.name, customer.level, customer.favoriteMenu, customer.totalTransaction])], (err) => {
  if (err) throw err;
  console.log('Customers data seeded.');
  process.exit();
});
