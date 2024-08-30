const express = require('express');
const { initDb } = require('./config/db')
const app = express();
const userRoutes = require('./routes/userRoutes');
const bubbleRoutes = require('./routes/bubbleRoutes');
initDb();
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', bubbleRoutes);



module.exports = app;