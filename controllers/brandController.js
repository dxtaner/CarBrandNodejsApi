const Brand = require('../models/brand');

const createBrand = async (req, res) => {
  try {
    const { name, country, foundedYear, logoUrl, websiteUrl, socialMediaHandles, headquarters } = req.body;

    // Check if brand with the given name already exists
    const existingBrand = await Brand.findOne({ name: name });
    if (existingBrand) {
      return res.status(400).json({ error: 'Brand with this name already exists' });
    }

    // Create a new brand object
    const brand = new Brand({
      name: name,
      country: country,
      foundedYear: foundedYear,
      logoUrl: logoUrl,
      websiteUrl: websiteUrl,
      socialMediaHandles: socialMediaHandles,
      headquarters: headquarters,
    });

    // Save the brand object to the database
    const savedBrand = await brand.save();

    res.status(201).json(savedBrand);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const getAllBrand = async (req, res, next) => {
  try {
    const brands = await Brand.find();
    return res.status(200).json(brands);
  } catch (error) {
    next(error);
  }
};


const getBrandById = async (req, res, next) => {
  try {
    const brandId = req.params.id;
    // const brand = await Brand.findById(brandId).populate('models');
    const brand = await Brand.findById(brandId);
    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    return res.status(200).json(brand);
  } catch (error) {
    next(error);
  }
};

const updateBrand = async (req, res, next) => {
  const { id } = req.params;
  const { name, country, foundedYear, logoUrl, websiteUrl, socialMediaHandles, headquarters } = req.body;

  try {
    const brand = await Brand.findByIdAndUpdate(id, { name, country, foundedYear, logoUrl, websiteUrl, socialMediaHandles, headquarters }, { new: true });
    return res.status(200).json(brand);
  } catch (error) {
    next(error);
  }
};

const deleteBrand = async (req, res, next) => {
  const { id } = req.params;

  try {
    const brand = await Brand.findByIdAndDelete(id);

    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }

    return res.status(200).json({ message: 'Brand deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBrand,
  getAllBrand,
  getBrandById,
  updateBrand,
  deleteBrand
};
