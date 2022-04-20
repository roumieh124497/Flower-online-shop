const express = require('express');

const cartController = require('./../controllers/cartController');

const router = express.Router();

router
  .route('/place-order/flowers/:id')
  .post(cartController.placeOrderFlowerPost);
router
  .route('/place-order/bouquets/:id')
  .post(cartController.placeOrderBouquetPost);
router.route('/place-order/vases/:id').post(cartController.placeOrderVasePost);
router.route('/delete-order/:id').get(cartController.deleteOrder);

module.exports = router;
