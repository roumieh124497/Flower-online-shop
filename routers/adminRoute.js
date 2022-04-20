const express = require('express');
const adminController = require('./../controllers/adminController');
const middleware = require('./../middleware/index');
const router = express.Router();
router
  .route('/dashboard')
  .get(middleware.isAdmin, adminController.getDashboard);

//flowers routers
router
  .route('/dashboard/flowers/find/:page')
  .get(middleware.isAdmin, adminController.getEditFlowerPage);
router
  .route('/dashboard/flowers/new')
  .get(middleware.isAdmin, adminController.getCreateFlowerPage)
  .post(
    middleware.isAdmin,
    adminController.upload.single('flower'),
    adminController.resizeImagesProduct,
    adminController.createFlowerPost,
  );
router
  .route('/dashboard/flowers/update/:id')
  .get(middleware.isAdmin, adminController.getUpdateFlowerPage)
  .post(
    middleware.isAdmin,
    adminController.upload.single('updatedFlower'),
    adminController.resizeImagesProduct,
    adminController.updateFlowerPost,
  );
router
  .route('/dashboard/flowers/delete/:id')
  .get(middleware.isAdmin, adminController.deleteFlowerPost);

//bouquets routers
router
  .route('/dashboard/bouquets/find/:page')
  .get(middleware.isAdmin, adminController.getEditBouquetPage);
router
  .route('/dashboard/bouquets/new')
  .get(middleware.isAdmin, adminController.getCreateBouquetPage)
  .post(
    middleware.isAdmin,
    adminController.upload.single('bouquet'),
    adminController.resizeImagesProduct,
    adminController.createBouquetPost,
  );
router
  .route('/dashboard/bouquets/update/:id')
  .get(middleware.isAdmin, adminController.getUpdateBouquetPage)
  .post(
    middleware.isAdmin,
    adminController.upload.single('updatedBouquet'),
    adminController.resizeImagesProduct,
    adminController.updateBouquetPost,
  );

router
  .route('/dashboard/bouquets/delete/:id')
  .get(middleware.isAdmin, adminController.deleteBouquetPost);

// covers routes
router
  .route('/dashboard/covers/find/:page')
  .get(middleware.isAdmin, adminController.getEditCoverPage);
router
  .route('/dashboard/covers/new')
  .get(middleware.isAdmin, adminController.getCreateCoverPage)
  .post(
    middleware.isAdmin,
    adminController.upload.single('cover'),
    adminController.resizeImagesProduct,
    adminController.createCoverPost,
  );

router
  .route('/dashboard/covers/update/:id')
  .get(middleware.isAdmin, adminController.getUpdateCoverPage)
  .post(
    middleware.isAdmin,
    adminController.upload.single('updatedCover'),
    adminController.resizeImagesProduct,
    adminController.updateCoverPost,
  );

router
  .route('/dashboard/covers/delete/:id')
  .get(middleware.isAdmin, adminController.deleteCoversPost);

// vase controller

router
  .route('/dashboard/vases/find/:page')
  .get(middleware.isAdmin, adminController.getEditVasePage);
router
  .route('/dashboard/vases/new')
  .get(middleware.isAdmin, adminController.getCreateVasePage)
  .post(
    middleware.isAdmin,
    adminController.upload.single('vase'),
    adminController.resizeImagesProduct,
    adminController.createVasePost,
  );

router
  .route('/dashboard/vases/update/:id')
  .get(middleware.isAdmin, adminController.getUpdateVasePage)
  .post(
    middleware.isAdmin,
    adminController.upload.single('updatedVase'),
    adminController.resizeImagesProduct,
    adminController.updateVasePost,
  );

router
  .route('/dashboard/vases/delete/:id')
  .get(middleware.isAdmin, adminController.deleteVasePost);

router
  .route('/dashboard/orders')
  .get(middleware.isAdmin, adminController.getOrderPage);
module.exports = router;
router
  .route('/confirm-order/:id')
  .get(middleware.isAdmin, adminController.getConfirmOrderPage);
router
  .route('/deliver/:id')
  .get(middleware.isAdmin, adminController.confirmDeliver);
router.route('/reject/:id').get(middleware.isAdmin, adminController.canelOrder);
module.exports = router;
