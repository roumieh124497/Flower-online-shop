const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  productId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }],
  extra: {
    type: Array,
  },
  totalAmount: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  orderFeedback: {
    type: String,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  isDeliveried: {
    type: Boolean,
    default: false,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  deliveryDate: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;
