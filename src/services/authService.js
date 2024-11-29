// src/services/authService.js
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (userData) => {
    const { username, password, role } = userData;

    // Kiểm tra xem người dùng đã tồn tại chưa
    let user = await User.findOne({ username });
    if (user) {
        throw new Error('User already exists');
    }

    // Mã hóa mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Tạo người dùng mới
    user = new User({
        username,
        password: hashedPassword,
        role, // Thêm vai trò
    });

    await user.save();

    return user;
};

exports.login = async (credentials) => {
    const { username, password } = credentials;

    // Kiểm tra người dùng
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Invalid credentials');
    }

    // Kiểm tra mật khẩu
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    // Tạo JWT
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    return { token, user };
};