const express = require('express');

const productController = require('./../controllers/productController');

const router = express.Router();

router.route('/products').get(productController.getProductPage);
router.route('/products/search').get(productController.getProductSeachPage);

module.exports = router;
