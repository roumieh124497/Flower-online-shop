const User = require('./../models/userModel');
const sendEmail = require('./../utilities/nodemailer');
const uuid = require('uuid');
const Reset = require('./../models/resetPasswordModel');
const bcrypt = require('bcrypt');
exports.resetPassword = async (req, res) => {
  const message = req.flash('resetError')[0];
  const successMessage = req.flash('resetSuccess')[0];
  res.render('hiscent/resetPasswordPage.ejs', {
    message,
    successMessage,
  });
};

exports.resetPasswordPost = async (req, res) => {
  const email = req.body.email;

  const user = await User.findOne({ email: email });
  if (!user) {
    req.flash('resetError', 'We could not find this email!');
    return res.redirect('/reset-password');
  }
  const token = uuid.v4();
  const reset = await Reset({
    token: token,
    email: email,
  });
  reset.save();
  sendEmail(req.body.email, token);
  req.flash(
    'resetSuccess',
    'We send an email to this account to reset you password',
  );
  res.redirect('/reset-password');
};

exports.finalResetPage = async (req, res) => {
  const token = req.params.token;

  const reset = await Reset.findOne({ token: token });
  const message = req.flash('resetErrorToken')[0];

  res.render('hiscent/resetPasswordFinal.ejs', { reset, token, message });
};

exports.finalResetPost = async (req, res) => {
  if (req.body.password !== req.body.passwordConfirm) {
    req.flash('resetErrorToken', 'Password do not match!!');
    return res.redirect(`/reset-password/${req.params.token}`);
  }
  const reset = await Reset.findOne({ token: req.params.token });
  const hashedPassword = await bcrypt.hash(req.body.password, 12);
  const user = await User.updateOne(
    { email: reset.email },
    { $set: { password: hashedPassword } },
  );
  req.flash('resetSuccess', 'New password updated');
  res.redirect('/reset-password');
};
