const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const sweetsRoutes = require('./routes/sweets');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/sweets', sweetsRoutes);

app.use(errorHandler);

module.exports = app;
