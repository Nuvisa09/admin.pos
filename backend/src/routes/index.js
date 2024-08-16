// routes/index.js
const express = require('express');
const router = express.Router();
const customerRoutes = require('./customerRoutes.jsx');

router.use('/customer', customerRoutes);

module.exports = router;
