const express = require('express');
const settingController = require('./../controllers/settingController');
const middleware = require('./../middleware/index');
const router = express.Router();

router
  .route('/setting')
  .get(middleware.isLoggedInUser, settingController.settingPage);
router
  .route('/setting/delete-account/:id')
  .get(middleware.isLoggedInUser, settingController.deleteAcount);
router
  .route('/setting/update-password/:id')
  .post(middleware.isLoggedInUser, settingController.updatePassword);

module.exports = router;
