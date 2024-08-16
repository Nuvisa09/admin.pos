// controllers/customer.controller.js
const Customer = require('../models/customermodel.jsx');

exports.getAllCustomers = (req, res) => {
  Customer.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

exports.getCustomerById = (req, res) => {
  const id = req.params.id;
  Customer.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Customer not found' });
    res.status(200).json(results[0]);
  });
};

exports.createCustomer = (req, res) => {
  const newCustomer = req.body;
  Customer.create(newCustomer, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: results.insertId, ...newCustomer });
  });
};

exports.updateCustomer = (req, res) => {
  const id = req.params.id;
  const updatedCustomer = req.body;
  Customer.update(id, updatedCustomer, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Customer not found' });
    res.status(200).json({ id, ...updatedCustomer });
  });
};

exports.deleteCustomer = (req, res) => {
  const id = req.params.id;
  Customer.delete(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.affectedRows === 0) return res.status(404).json({ message: 'Customer not found' });
    res.status(204).send();
  });
};
