// src/app.js
const express = require('express');
const connectDB = require('./db/mongodb');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const config = require('./config/config');

const app = express();

// Connect to database
let mongoUri = `${config.db.type}://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`;
console.log(mongoUri);

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

module.exports = app;