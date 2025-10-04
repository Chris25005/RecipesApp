const express = require('express');
const { registerUser, loginUser, getUserInfo } = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/auth');

const authRouter = express.Router();

// Public Routes
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);

// Protected Route
authRouter.get('/me', isAuthenticated, getUserInfo);

module.exports = authRouter;
