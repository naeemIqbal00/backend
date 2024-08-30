const express = require('express');
const { initDb } = require('./config/db')
const app = express();
const userRoutes = require('./routes/userRoutes');
initDb();
app.use(express.json());
app.use('/api', userRoutes);



module.exports = app;