const multer = require('multer');
const multerConfig = require('../utilities/multer');
const uploadedFile = require('./../utilities/Sharp');
const Flower = require('./../models/flowersModel');
const Bouquet = require('./../models/bouquetsModel');
const Vase = require('./../models/vasesModel');
const Cover = require('./../models/coversModel');
const fs = require('fs');
const { findByIdAndDelete } = require('../models/userModel');
const Order = require('./../models/OrderModel');
const Cart = require('./../models/CartModel');
let flowerImagePath;
let bouquetImagePath;
let coverImagePath;
let vaseImagePath;

//upload file controller
exports.upload = multer({
  storage: multerConfig.storage,
  fileFilter: multerConfig.multerFilter,
});

exports.resizeImagesProduct = async (req, res, next) => {
  if (!req.file) return next();

  if (req.url === '/dashboard/flowers/new') {
    uploadedFile('flower', 'flowers', req);
  } else if (req.url === '/dashboard/bouquets/new') {
    uploadedFile('bouquet', 'bouquets', req);
  } else if (req.url === '/dashboard/vases/new') {
    uploadedFile('vase', 'vases', req);
  } else if (req.url === '/dashboard/covers/new') {
    uploadedFile('cover', 'covers', req);
  } else if (req.url === `/dashboard/flowers/update/${req.params.id}`) {
    uploadedFile('flower', 'flowers', req);
  } else if (req.url === `/dashboard/bouquets/update/${req.params.id}`) {
    uploadedFile('bouquet', 'bouquets', req);
  } else if (req.url === `/dashboard/covers/update/${req.params.id}`) {
    uploadedFile('cover', 'covers', req);
  } else if (req.url === `/dashboard/vases/update/${req.params.id}`) {
    uploadedFile('vase', 'vases', req);
  }
  next();
};

//serving views controller and http methods

//dashboard controller
exports.getDashboard = async (req, res) => {
  const orders = await Order.find({ isDeliveried: false });
  const numberOfOrder = orders.length;
  res.render('admin/adminDashboard.ejs', {
    numberOfOrder,
  });
};

//flower controller
exports.getEditFlowerPage = async (req, res) => {
  const message = req.flash('Success')[0];
  const perPage = 5;
  const page = req.params.page || 1;
  //number of pages to display
  const allFlowers = await Flower.find({});
  const pages = Math.ceil(allFlowers.length / 5);
  const flowers = await Flower.find({})
    .skip(perPage * page - perPage)
    .limit(perPage);
  const orders = await Order.find({ isDeliveried: false });
  const numberOfOrder = orders.length;
  res.render('admin/EditFlower.ejs', {
    message: message,
    flowers: flowers,
    pages: pages,
    numberOfOrder,
  });
};

exports.getCreateFlowerPage = async (req, res) => {
  const errorMessage = req.flash('createFlowerErrorMessage')[0];
  const orders = await Order.find({ isDeliveried: false });
  const numberOfOrder = orders.length;
  res.render('admin/createFlower.ejs', {
    message: errorMessage,
    numberOfOrder,
  });
};
exports.createFlowerPost = async (req, res) => {
  try {
    if (
      !(req.body.name && req.body.price && req.body.numberOfItems && req.file)
    ) {
      req.flash(
        'createFlowerErrorMessage',
        'Please Fill required fields (name, price, number of Items, image)',
      );
      return res.redirect('/admin/dashboard/flowers/new');
    }
    const isBestSell = req.body.isBestSeller === 'on' ? true : false;
    const flower = await Flower({
      name: req.body.name,
      price: req.body.price,
      uploadedFile: req.file.filename,
      number_of_items: req.body.numberOfItems,
      is_bestSellers: isBestSell,
      discount: req.body.discount,
    });
    flower.save();
    req.flash('Success', 'You Added Successfully');
    res.redirect('/admin/dashboard/flowers/find/1');
  } catch (err) {
    console.log(err);
  }
};

exports.getUpdateFlowerPage = async (req, res) => {
  const flower_id = req.params.id;
  const flower = await Flower.findById(flower_id);
  const flowerId = flower._id.toString();
  flowerImagePath = flower.uploadedFile;
  const orders = await Order.find({ isDeliveried: false });
  const numberOfOrder = orders.length;

  const message = req.flash('updateErrorMessage')[0];
  res.render('admin/updateFlower.ejs', {
    message: message,
    flower: flower,
    flowerId: flowerId,
    numberOfOrder,
  });
};

exports.updateFlowerPost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!(req.body.name && req.body.price && req.body.numberOfItems)) {
      req.flash(
        'updateErrorMessage',
        'Please Fill required fields (name, price, number of Items)',
      );
      return res.redirect(`/admin/dashboard/flowers/update/${id}`);
    }

    const isBestSell = req.body.isBestSeller === 'on' ? true : false;

    const updatedFlower = await Flower.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          number_of_items: req.body.numberOfItems,
          is_bestSellers: isBestSell,
          discount: req.body.discount,
          uploadedFile: req.file?.filename,
        },
      },
      {
        new: true,
      },
    );
    if (!(req.file === undefined)) {
      fs.unlink(`public/upload/images/flowers/${flowerImagePath}`, err =>
        console.log(err),
      );
    }
    req.flash('Success', 'You updated successfully');
    res.redirect('/admin/dashboard/flowers/find/1');
  } catch (err) {
    console.log(err);
  }
};

exports.deleteFlowerPost = async (req, res) => {
  try {
    const { id } = req.params;
    const flower = await Flower.findByIdAndDelete(id);
    const imagePath = flower.uploadedFile;
    if (imagePath) {
      fs.unlink(`public/upload/images/flowers/${imagePath}`, err =>
        console.log(err),
      );
    }
    req.flash('Success', 'You deleted successfully');
    res.redirect('/admin/dashboard/flowers/find/1');
  } catch (err) {
    console.log(err);
  }
};

//bouquet controller

exports.getEditBouquetPage = async (req, res) => {
  const message = req.flash('Success')[0];
  const perPage = 5;
  const page = req.params.page || 1;
  //number of pages to display
  const allBouquet = await Bouquet.find({});
  const pages = Math.ceil(allBouquet.length / 5);

  const bouquets = await Bouquet.find({})
    .skip(perPage * page - perPage)
    .limit(perPage);
  const orders = await Order.find({ isDeliveried: false });
  const numberOfOrder = orders.length;

  res.render('admin/EditBouquet.ejs', {
    message: message,
    bouquets: bouquets,
    pages: pages,
    numberOfOrder,
  });
};
exports.getCreateBouquetPage = async (req, res) => {
  const errorMessage = req.flash('createFlowerErrorMessage')[0];
  const orders = await Order.find({ isDeliveried: false });
  const numberOfOrder = orders.length;
  res.render('admin/createBouquet.ejs', {
    message: errorMessage,
    numberOfOrder,
  });
};
exports.createBouquetPost = async (req, res) => {
  try {
    if (
      !(req.body.name && req.body.price && req.body.numberOfItems && req.file)
    ) {
      req.flash(
        'createFlowerErrorMessage',
        'Please Fill required fields (name, price, number of Items, image)',
      );
      return res.redirect('/admin/dashboard/bouquets/new');
    }
    const isBestSell = req.body.isBestSeller === 'on' ? true : false;
    const bouquet = await Bouquet({
      name: req.body.name,
      price: req.body.price,
      uploadedFile: req.file.filename,
      number_of_items: req.body.numberOfItems,
      is_bestSellers: isBestSell,
      discount: req.body.discount,
    });
    bouquet.save();
    req.flash('Success', 'You Added Successfully');
    res.redirect('/admin/dashboard/bouquets/find/1');
  } catch (err) {
    console.log(err);
  }
};

exports.getUpdateBouquetPage = async (req, res) => {
  const bouquet_id = req.params.id;
  const bouquet = await Bouquet.findById(bouquet_id);
  const bouquetId = bouquet._id.toString();
  bouquetImagePath = bouquet.uploadedFile;

  const message = req.flash('updateErrorMessage')[0];
  const orders = await Order.find({ isDeliveried: false });
  const numberOfOrder = orders.length;
  res.render('admin/updateBouquet.ejs', {
    message: message,
    bouquet: bouquet,
    bouquetId: bouquetId,
    numberOfOrder,
  });
};

exports.updateBouquetPost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!(req.body.name && req.body.price && req.body.numberOfItems)) {
      req.flash(
        'updateErrorMessage',
        'Please Fill required fields (name, price, number of Items)',
      );
      return res.redirect(`/admin/dashboard/bouquets/update/${id}`);
    }

    const isBestSell = req.body.isBestSeller === 'on' ? true : false;

    const updatedBouquet = await Bouquet.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          number_of_items: req.body.numberOfItems,
          is_bestSellers: isBestSell,
          discount: req.body.discount,
          uploadedFile: req.file?.filename,
        },
      },
      {
        new: true,
      },
    );
    if (!(req.file === undefined)) {
      fs.unlink(`public/upload/images/bouquets/${bouquetImagePath}`, err =>
        console.log(err),
      );
    }
    req.flash('Success', 'You updated successfully');
    res.redirect('/admin/dashboard/bouquets/find/1');
  } catch (err) {
    console.log(err);
  }
};

exports.deleteBouquetPost = async (req, res) => {
  try {
    const { id } = req.params;
    const bouquet = await Bouquet.findByIdAndDelete(id);
    const imagePath = bouquet.uploadedFile;
    if (imagePath) {
      fs.unlink(`public/upload/images/bouquets/${imagePath}`, err =>
        console.log(err),
      );
    }
    req.flash('Success', 'You deleted successfully');
    res.redirect('/admin/dashboard/bouquets/find/1');
  } catch (err) {
    console.log(err);
  }
};

// cover controller
exports.getEditCoverPage = async (req, res) => {
  const message = req.flash('Success')[0];

  const perPage = 5;
  const page = req.params.page || 1;
  //number of pages to display
  const allCover = await Cover.find({});
  const pages = Math.ceil(allCover.length / 5);

  const covers = await Cover.find({})
    .skip(perPage * page - perPage)
    .limit(perPage);
  const orders = await Order.find({ isDeliveried: false });
  const numberOfOrder = orders.length;

  res.render('admin/EditCover.ejs', {
    message: message,
    pages: pages,
    covers: covers,
    numberOfOrder,
  });
};
exports.getCreateCoverPage = async (req, res) => {
  const orders = await Order.find({ isDeliveried: false });
  const numberOfOrder = orders.length;
  const errorMessage = req.flash('createFlowerErrorMessage')[0];
  res.render('admin/createCover.ejs', {
    message: errorMessage,
    numberOfOrder,
  });
};

exports.createCoverPost = async (req, res) => {
  try {
    if (!(req.body.color && req.body.price && req.file)) {
      req.flash(
        'createFlowerErrorMessage',
        'Please Fill required fields (color, price, image)',
      );
      return res.redirect('/admin/dashboard/covers/new');
    }
    const cover = await Cover({
      color: req.body.color,
      price: req.body.price,
      uploadedFile: req.file.filename,
    });
    cover.save();
    req.flash('Success', 'You Added Successfully');
    res.redirect('/admin/dashboard/covers/find/1');
  } catch (err) {
    console.log(err);
  }
};

exports.getUpdateCoverPage = async (req, res) => {
  const cover_id = req.params.id;
  const cover = await Cover.findById(cover_id);
  const coverId = cover._id.toString();
  coverImagePath = cover.uploadedFile;
  const orders = await Order.find({ isDeliveried: false });
  const numberOfOrder = orders.length;
  const message = req.flash('updateErrorMessage')[0];
  res.render('admin/updateCover.ejs', {
    message: message,
    cover: cover,
    coverId: coverId,
    numberOfOrder,
  });
};

exports.updateCoverPost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!(req.body.color && req.body.price)) {
      req.flash(
        'updateErrorMessage',
        'Please Fill required fields (color, price)',
      );
      return res.redirect(`/admin/dashboard/covers/update/${id}`);
    }

    const updatedCover = await Cover.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          color: req.body.color,
          price: req.body.price,
          uploadedFile: req.file?.filename,
        },
      },
      {
        new: true,
      },
    );
    if (!(req.file === undefined)) {
      fs.unlink(`public/upload/images/covers/${coverImagePath}`, err =>
        console.log(err),
      );
    }
    req.flash('Success', 'You updated successfully');
    res.redirect('/admin/dashboard/covers/find/1');
  } catch (err) {
    console.log(err);
  }
};

exports.deleteCoversPost = async (req, res) => {
  try {
    const { id } = req.params;
    const cover = await Cover.findByIdAndDelete(id);
    const imagePath = cover.uploadedFile;
    if (imagePath) {
      fs.unlink(`public/upload/images/covers/${imagePath}`, err =>
        console.log(err),
      );
    }
    req.flash('Success', 'You deleted successfully');
    res.redirect('/admin/dashboard/covers/find/1');
  } catch (err) {
    console.log(err);
  }
};

//vase controller

exports.getEditVasePage = async (req, res) => {
  const message = req.flash('Success')[0];

  const perPage = 5;
  const page = req.params.page || 1;
  //number of pages to display
  const allVase = await Vase.find({});
  const pages = Math.ceil(allVase.length / 5);

  const vases = await Vase.find({})
    .skip(perPage * page - perPage)
    .limit(perPage);
  const orders = await Order.find({ isDeliveried: false });
  const numberOfOrder = orders.length;

  res.render('admin/EditVase.ejs', {
    message: message,
    pages: pages,
    vases: vases,
    numberOfOrder,
  });
};
exports.getCreateVasePage = async (req, res) => {
  const errorMessage = req.flash('createFlowerErrorMessage')[0];
  const orders = await Order.find({ isDeliveried: false });
  const numberOfOrder = orders.length;
  res.render('admin/createVase.ejs', {
    message: errorMessage,
    numberOfOrder,
  });
};

exports.createVasePost = async (req, res) => {
  try {
    if (!(req.body.name && req.body.price && req.file)) {
      req.flash(
        'createFlowerErrorMessage',
        'Please Fill required fields (name, price, image)',
      );
      return res.redirect('/admin/dashboard/vases/new');
    }
    const vase = await Vase({
      name: req.body.name,
      price: req.body.price,
      uploadedFile: req.file.filename,
    });
    vase.save();
    req.flash('Success', 'You Added Successfully');
    res.redirect('/admin/dashboard/vases/find/1');
  } catch (err) {
    console.log(err);
  }
};

exports.getUpdateVasePage = async (req, res) => {
  const vase_id = req.params.id;
  const vase = await Vase.findById(vase_id);
  const vaseId = vase._id.toString();
  vaseImagePath = vase.uploadedFile;
  const orders = await Order.find({ isDeliveried: false });
  const numberOfOrder = orders.length;
  const message = req.flash('updateErrorMessage')[0];
  res.render('admin/updateVase.ejs', {
    message: message,
    vase: vase,
    vaseId: vaseId,
    numberOfOrder,
  });
};

exports.updateVasePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!(req.body.name && req.body.price)) {
      req.flash(
        'updateErrorMessage',
        'Please Fill required fields (name, price)',
      );
      return res.redirect(`/admin/dashboard/vases/update/${id}`);
    }

    const updatedVase = await Vase.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          uploadedFile: req.file?.filename,
        },
      },
      {
        new: true,
      },
    );
    if (!(req.file === undefined)) {
      fs.unlink(`public/upload/images/vases/${vaseImagePath}`, err =>
        console.log(err),
      );
    }
    req.flash('Success', 'You updated successfully');
    res.redirect('/admin/dashboard/vases/find/1');
  } catch (err) {
    console.log(err);
  }
};
exports.deleteVasePost = async (req, res) => {
  try {
    const { id } = req.params;
    const vase = await Vase.findByIdAndDelete(id);
    const imagePath = vase.uploadedFile;
    if (imagePath) {
      fs.unlink(`public/upload/images/vases/${imagePath}`, err =>
        console.log(err),
      );
    }
    req.flash('Success', 'You deleted successfully');
    res.redirect('/admin/dashboard/vases/find/1');
  } catch (err) {
    console.log(err);
  }
};

exports.getOrderPage = async (req, res) => {
  const ordersAll = await Order.find({}).sort({ createAt: -1 });
  const orders = await Order.find({ isDeliveried: false });
  const numberOfOrder = orders.length;
  console.log(orders);
  res.render('admin/orderPage.ejs', {
    numberOfOrder,
    ordersAll,
  });
};

exports.getConfirmOrderPage = async (req, res) => {
  try {
    const products = [];
    const orderId = req.params.id;
    const order = await Order.findById(orderId);

    if (order) {
      let e = 0;
      for (let i = 0; i < order.productId.length; i++) {
        const product = await Cart.findOne({ _id: order.productId[i] });
        if (product.types === 'flowers') {
          products.push({
            name: product.name,
            quantity: product.quantity,
            price: product.price,
            wrapper: order.extra[e],
            image: product.image,
            type: product.types,
          });
          e++;
        } else {
          products.push({
            name: product.name,
            quantity: product.quantity,
            price: product.price,
            image: product.image,
            type: product.types,
          });
        }
      }
      const total = +order.totalAmount + 30;
      res.render('admin/orderConfirmPage.ejs', {
        order,
        products,
        total,
        orderId,
      });
    } else {
      return res.status(400).json({
        message: 'No order with this id (Error).',
      });
    }
  } catch (err) {
    return res.status(400).json({
      message: 'No order with this id (Error).',
    });
  }
};

exports.confirmDeliver = async (req, res) => {
  const id = req.params.id;
  const update = await Order.findByIdAndUpdate(
    { _id: id },
    { isDeliveried: true },
  );
  res.redirect('/admin/dashboard/orders');
};

exports.canelOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findByIdAndDelete(orderId);
    res.redirect('/admin/dashboard/orders');
  } catch (err) {
    console.log(err);
  }
};
