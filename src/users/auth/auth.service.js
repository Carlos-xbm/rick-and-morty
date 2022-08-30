require('dotenv').config();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const loginService = (email) => User.findOne({ email: email }).select('+password');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.SECRET, { expiresIn: '24h' });
};

module.exports = { loginService, generateToken };
