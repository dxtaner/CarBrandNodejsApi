const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

// Get all cars
router.get('/cars', carController.getAllCars);

// Get a car
router.get('/cars/:id', carController.getCar);

// Add a new car
router.post('/cars', carController.createCar);

// delete a car
// router.delete('cars/:id', carController.deleteCar);

module.exports = router;
