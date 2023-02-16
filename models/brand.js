const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  foundedYear: {
    type: Number,
  },
  logoUrl: {
    type: String,
  },
  websiteUrl: {
    type: String,
  },
  socialMediaHandles: {
    type: Map,
    of: String,
  },
  headquarters: {
    type: {
      city: String,
      state: String,
      country: String,
    },
  },
  models: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
  }],
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
