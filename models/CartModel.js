const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  itemId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  types: {
    type: String,
  },
  isCheckedout: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
