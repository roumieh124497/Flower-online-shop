const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();
const passport = require('passport');

// signing up users

router
  .route('/user-signup')
  .get(authController.getSignupPage)
  .post(authController.createUser);
module.exports = router;

// admin login page and login functionality and logout for admin

router.route('/admin-login').get(authController.getLoginPage);

router.route('/admin-login').post(
  passport.authenticate('local', {
    failureRedirect: '/auth/admin-login',
    successRedirect: '/admin/dashboard',
    failureFlash: true,
  }),
);
router.route('/admin-logout').get(authController.adminLogout);

// admin login page and login functionality and logout for admin

router.route('/user-login').get(authController.getUserLoginPage);
router.route('/user-login').post(
  passport.authenticate('local', {
    failureRedirect: '/auth/user-login',
    successRedirect: '/home',
    failureFlash: true,
  }),
);

router.route('/user-logout').get(authController.userLogout);
