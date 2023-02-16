const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/users', userController.getUsers);

// Get user
router.get('/users/:id', userController.getUser);

// Register a new user
router.post('/users/register', userController.register);

// Login a user
router.post('/users/login', userController.login);

// Delete user
router.delete('/users/:id', userController.deleteUser);

// update a user
router.put('/users/:id', userController.updateUser);

module.exports = router;
