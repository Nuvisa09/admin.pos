// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const routes = require('./routes');
app.use('/api', routes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
