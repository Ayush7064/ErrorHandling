const express = require('express');
const router = express.Router();
const asyncHandler = require('../utils/asyncHandler');
const CustomError = require('../utils/CustomError');

// login using query params
router.get('/login', asyncHandler(async (req, res) => {
  const { user } = req.query;

  if (!user) {
    throw new CustomError('Username is required', 400);
  }

  if (user !== 'admin') {
    throw new CustomError('Invalid user', 401);
  }

  res.send(`<h2>Welcome, ${user}!</h2>`);
}));

// registration using query params
router.get('/register', asyncHandler(async (req, res) => {
  const { email } = req.query;

  if (!email) {
    throw new CustomError('Email is required', 400);
  }

  if (email === 'test@example.com') {
    throw new CustomError('Email already registered', 409);
  }

  res.send(`<h2>Registered successfully with email: ${email}</h2>`);
}));

//route without login
router.get('/dashboard', asyncHandler(async (req, res) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    throw new CustomError('Access denied. Please log in.', 403);
  }

  res.send('<h2>Welcome to your dashboard!</h2>');
}));

// resource not found
router.get('/notfound', asyncHandler(async (req, res) => {
  throw new CustomError('User not found', 404);
}));

// internal server crash
router.get('/crash', asyncHandler(async (req, res) => {
  throw new Error('Database disconnected!');
}));

module.exports = router;
