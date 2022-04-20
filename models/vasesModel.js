const mongoose = require('mongoose');

const vaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the flower name'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter the flower price'],
  },
  uploadedFile: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Vase = mongoose.model('vases', vaseSchema);

module.exports = Vase;
