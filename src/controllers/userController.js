// src/controllers/userController.js
exports.getProfile = (req, res) => {
    // Logic để lấy thông tin người dùng từ req.user
    res.send(req.user);
};