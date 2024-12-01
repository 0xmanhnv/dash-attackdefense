// src/app.js
const express = require('express');
const connectDB = require('./db/mongodb');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const config = require('./config/config');
const path = require('path');
const { title } = require('process');

const app = express();

// Connect to database
let mongoUri = `${config.db.type}://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}?authSource=admin`;
connectDB(mongoUri);

// Thiết lập thư mục public để chứa các tệp tĩnh
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, 'views'));
// Thiết lập view engine là EJS
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());

// Routes html templates
app.get('/', (req, res) => {
    res.render('index');
});

// Routes html templates
app.get('/submit', (req, res) => {
    res.render('submit');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

module.exports = app;