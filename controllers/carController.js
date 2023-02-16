const Car = require('../models/car');

const createCar = async (req, res, next) => {
  const {
    brand,
    model,
    year,
    color,
    price,
    mileage,
    engine,
    transmission,
    fuelType,
    imageUrl,
  } = req.body;

  try {
    const car = new Car({
      brand,
      model,
      year,
      color,
      price,
      mileage,
      engine,
      transmission,
      fuelType,
      imageUrl,
    });

    const savedCar = await car.save();

    res.status(201).json({
      message: 'Car created successfully',
      car: savedCar,
    });
  } catch (error) {
    next(error);
  }
};

const getAllCars = async (req, res, next) => {
  try {
    const cars = await Car.find().populate('brand').exec();
    res.json(cars);
  } catch (error) {
    next(error);
  }
};

const getCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id).populate('brand');

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    return res.json(car);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createCar,
  getAllCars,
  getCar
};
