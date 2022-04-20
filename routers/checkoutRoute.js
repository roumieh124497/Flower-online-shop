const express = require('express');
const checkoutController = require('./../controllers/checkoutController');

const router = express.Router();

// router.route('/checkout').get()
router.route('/place-order').post(checkoutController.placeOrderPost);

router.route('/checkout/:id').get(checkoutController.placeOrderPage);
router.route('/checkout/cancel/:id').get(checkoutController.cancelOrder);
router
  .route('/checkout/confirm-order/:id')
  .get(checkoutController.confirmUnpaidOrder);
router
  .route('/checkout/confirm-order-online/:id')
  .post(checkoutController.confirmPaidOrder);

module.exports = router;
