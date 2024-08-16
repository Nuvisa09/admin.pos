// models/customer.model.js
const db = require('../config/database.jsx');

const Customer = {};

Customer.getAll = (callback) => {
  db.query('SELECT * FROM customer', callback);
};

Customer.getById = (id, callback) => {
  db.query('SELECT * FROM customer WHERE id = ?', [id], callback);
};

Customer.create = (newCustomer, callback) => {
  db.query('INSERT INTO customer SET ?', newCustomer, callback);
};

Customer.update = (id, updatedCustomer, callback) => {
  db.query('UPDATE customer SET ? WHERE id = ?', [updatedCustomer, id], callback);
};

Customer.delete = (id, callback) => {
  db.query('DELETE FROM customer WHERE id = ?', [id], callback);
};

module.exports = Customer;
