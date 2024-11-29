// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Lấy thông tin người dùng (yêu cầu xác thực)
router.get('/profile', authMiddleware.verifyToken, userController.getProfile);

// Route chỉ dành cho admin
router.get('/admin', authMiddleware.verifyToken, roleMiddleware.checkRole(['admin']), (req, res) => {
    res.send('Admin content');
});

module.exports = router;