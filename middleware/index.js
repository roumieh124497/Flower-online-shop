const User = require('../models/userModel');

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('message', 'You need to login!');
  res.redirect('/auth/admin-login');
};
exports.isLoggedInUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/home');
};

exports.isAdmin = async (req, res, next) => {
  if (req.isAuthenticated()) {
    userId = req.session.passport.user;
    const user = await User.findById(userId);
    if (user.role === 'admin') {
      return next();
    }
    req.flash('message', 'Oops! you are not an admin.');
    res.redirect('/auth/admin-login');
  } else {
    req.flash('message', 'You need to login :)');
    res.redirect('/auth/admin-login');
  }
};

// exports.isAdmin = (req, res, next) => {};
