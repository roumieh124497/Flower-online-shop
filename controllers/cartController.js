const Flower = require('./../models/flowersModel');
const Bouquet = require('./../models/bouquetsModel');
const Cart = require('./../models/CartModel');
const Vase = require('./../models/vasesModel');
const uniqid = require('uniqid');
exports.placeOrderFlowerPost = async (req, res) => {
  try {
    const itemId = req.params.id;
    const flower = await Flower.findById(itemId);
    let userId;
    if (req.session.passport) {
      userId = req.session.passport.user;
    } else {
      const userIDNotLogin = req.headers.cookie
        ?.split(';')
        ?.filter(elem => {
          return elem.startsWith(' userID');
        })[0]
        ?.split('=')[1];
      if (userIDNotLogin) {
        userId = userIDNotLogin;
      }
    }

    const cart = await Cart({
      userId: userId,
      itemId: itemId,
      name: flower.name,
      price: flower.price,
      image: flower.uploadedFile,
      quantity: req.body.quantity,
      types: req.body.type,
    });

    await cart.save();
    req.flash('openCart', 'active');
    res.redirect('/home');
  } catch (err) {
    console.log(err);
  }
};
exports.placeOrderBouquetPost = async (req, res) => {
  try {
    const itemId = req.params.id;
    const bouquet = await Bouquet.findById(itemId);
    let userId;
    if (req.session.passport) {
      userId = req.session.passport.user;
    } else {
      const userIDNotLogin = req.headers.cookie
        ?.split(';')
        ?.filter(elem => {
          return elem.startsWith(' userID');
        })[0]
        ?.split('=')[1];
      if (userIDNotLogin) {
        userId = userIDNotLogin;
      }
    }

    const cart = await Cart({
      userId: userId,
      itemId: itemId,
      name: bouquet.name,
      price: bouquet.price,
      image: bouquet.uploadedFile,
      quantity: req.body.quantity,
      types: req.body.type,
    });

    await cart.save();
    req.flash('openCart', 'active');
    res.redirect('/home');
  } catch (err) {
    console.log(err);
  }
};

exports.placeOrderVasePost = async (req, res) => {
  try {
    const itemId = req.params.id;
    const vase = await Vase.findById(itemId);
    let userId;
    if (req.session.passport) {
      userId = req.session.passport.user;
    } else {
      const userIDNotLogin = req.headers.cookie
        ?.split(';')
        ?.filter(elem => {
          return elem.startsWith(' userID');
        })[0]
        ?.split('=')[1];
      if (userIDNotLogin) {
        userId = userIDNotLogin;
      }
    }

    const cart = await Cart({
      userId: userId,
      itemId: itemId,
      name: vase.name,
      price: vase.price,
      image: vase.uploadedFile,
      quantity: req.body.quantity,
      types: req.body.type,
    });

    await cart.save();
    req.flash('openCart', 'active');
    res.redirect('/home');
  } catch (err) {
    console.log(err);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const itemId = req.params.id;
    console.log(itemId);

    const deletedCart = await Cart.findOneAndDelete({ _id: itemId });
    console.log(deletedCart);
    req.flash('openCart', 'active');
    res.redirect('/home');
  } catch (err) {
    console.log(err);
  }
};
