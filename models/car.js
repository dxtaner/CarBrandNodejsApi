const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Brand',
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
  },
  price: {
    type: Number,
  },
  mileage: {
    type: Number,
  },
  engine: {
    type: String,
  },
  transmission: {
    type: String,
  },
  fuelType: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
