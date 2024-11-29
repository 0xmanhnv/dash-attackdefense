// src/controllers/authController.js
const AuthService = require('../services/authService');

exports.register = async (req, res) => {
    try {
        const user = await AuthService.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { token, user } = await AuthService.login(req.body);
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};