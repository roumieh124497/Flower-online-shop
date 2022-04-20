const mongoose = require('mongoose');

const bouquetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the flower name'],
  },
  price: {
    type: Number,
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
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Bouquet = mongoose.model('bouquets', bouquetSchema);

module.exports = Bouquet;
