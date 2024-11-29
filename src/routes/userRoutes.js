// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Lấy thông tin người dùng (yêu cầu xác thực)
router.get('/profile', authMiddleware.verifyToken, userController.getProfile);

module.exports = router;