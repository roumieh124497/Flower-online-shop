const mongoose = require('mongoose');

const resetSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

resetSchema.index({ createdAt: 1 }, { expireAfterSeconds: 900 });
const Reset = mongoose.model('resets', resetSchema);

module.exports = Reset;
