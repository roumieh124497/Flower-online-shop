const mongoose = require('mongoose');

const coverSchema = new mongoose.Schema({
  color: {
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

const Cover = mongoose.model('covers', coverSchema);

module.exports = Cover;
