const mongoose = require('mongoose');

const flowerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the flower name'],
  },
  price: {
    type: String,
    required: [true, 'Please enter the flower price'],
  },
  uploadedFile: String,
  number_of_items: {
    type: Number,
  },
  is_bestSellers: {
    type: Boolean,
    default: false,
  },
  discount: {
    type: String,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Flower = mongoose.model('flowers', flowerSchema);

module.exports = Flower;
