const User = require('../models/userModel');

//admin auth

//login controller
exports.getLoginPage = (req, res) => {
  const message = req.flash('message')[0];
  console.log(message);
  res.render('admin/adminLogin.ejs', { message });
};
//register controller

//logout controller
exports.adminLogout = async (req, res) => {
  await req.session.destroy();
  req.logout();
  res.redirect('/auth/admin-login');
};

//user auth

exports.getUserLoginPage = (req, res) => {
  const successMessage = req.flash('success')[0];
  const message = req.flash('message')[0];
  res.render('hiscent/loginUser.ejs', {
    successMessage: successMessage,
    message: message,
  });
};

exports.getSignupPage = (req, res) => {
  const error = req.flash('signUpError')[0];
  res.render('hiscent/signupUser.ejs', {
    error: error,
  });
};

exports.createUser = async (req, res) => {
  try {
    if (req.body.password !== req.body.confirmPassword) {
      req.flash('signUpError', 'Passwords do not match!');
      return res.redirect('/auth/user-signup');
    }
    const userCheck = await User.findOne({ email: req.body.email });
    if (userCheck) {
      req.flash('signUpError', 'This Email already registered!');
      return res.redirect('/auth/user-signup');
    }
    const user = await User({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    await user.save();
    req.flash('success', 'Thanks for being one of us!');
    res.redirect('/auth/user-login');
  } catch (err) {
    if (err.message.startsWith('E11000')) {
      req.flash('signUpError', 'email already registered!');
      return res.redirect('/auth/user-signup');
    }
  }
};

exports.userLogout = async (req, res) => {
  await req.session.destroy();
  req.logout();
  res.redirect('/home');
};
