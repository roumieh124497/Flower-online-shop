const express = require('express');
const resetPasswordController = require('./../controllers/resetPasswordController');

const router = express.Router();

router.route('/reset-password').get(resetPasswordController.resetPassword);
router.route('/reset-password').post(resetPasswordController.resetPasswordPost);
router
  .route('/reset-password/:token')
  .get(resetPasswordController.finalResetPage)
  .post(resetPasswordController.finalResetPost);

module.exports = router;
