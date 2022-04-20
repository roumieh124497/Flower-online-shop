const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide your name'],
  },
  surname: {
    type: String,
    required: [true, 'please provide your surname'],
  },
  email: {
    type: String,
    required: [true, 'please provide your email'],
    unique: [, true, 'This email is already registered'],
  },
  password: {
    type: String,
    required: [true, 'please provide your password'],
  },
  confirmPassword: {
    type: String,
    required: [true, 'please provide your confirm password'],
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

const User = mongoose.model('users', userSchema);
module.exports = User;
