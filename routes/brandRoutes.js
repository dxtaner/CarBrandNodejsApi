const express = require('express');
const router = express.Router();

const brandController = require('../controllers/brandController');

// Create a new brand
router.post('/brands', brandController.createBrand);

// Get all brands
router.get('/brands', brandController.getAllBrand);

// Get a single brand by ID
router.get('/brands/:id', brandController.getBrandById);

// Update a brand by ID
router.put('/brands/:id', brandController.updateBrand);

// Delete a brand by ID
router.delete('/brands/:id', brandController.deleteBrand);

// Get all cars for a brand
// router.get('/:id/cars', brandController.getCarsForBrand);

// // Add a car to a brand
// router.post('/:id/cars', brandController.addCarToBrand);

module.exports = router;
