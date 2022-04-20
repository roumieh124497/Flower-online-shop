const User = require('./../models/userModel');
const bcrypt = require('bcrypt');
exports.settingPage = async (req, res) => {
  const id = req.session.passport.user;
  const message = req.flash('errorMessage')[0];
  const successMessage = req.flash('successMessage')[0];

  res.render('hiscent/settingPage.ejs', {
    id,
    message,
    successMessage,
  });
};

exports.updatePassword = async (req, res) => {
  const id = req.params.id;
  if (req.body.newPassword !== req.body.newPasswordConfirm) {
    req.flash('errorMessage', 'Passwords do not much!');
    return res.redirect('/setting');
  }
  const user = await User.findOne({ _id: id });

  const isPasswordCorrect = await bcrypt.compare(
    req.body.currentPassword,
    user.password,
  );

  if (isPasswordCorrect) {
    const hashedPassword = await bcrypt.hash(req.body.newPassword, 12);
    const updatedPassword = await User.findByIdAndUpdate(id, {
      password: hashedPassword,
    });
    req.flash('successMessage', 'Your password was updated!');
    return res.redirect('/setting');
  } else {
    req.flash('errorMessage', 'Please enter your current password correctly!');
    return res.redirect('/setting');
  }
};

exports.deleteAcount = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const deletedAccount = await User.findByIdAndDelete(id);

    await req.session.destroy();
    req.logout();
    res.redirect('/home');
  } catch (err) {
    console.log(err);
  }
};
