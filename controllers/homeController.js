const Flower = require('./../models/flowersModel');
const Bouquet = require('./../models/bouquetsModel');
const Vase = require('./../models/vasesModel');
const Cart = require('./../models/CartModel');
const User = require('./../models/userModel');

const escapeRegex = text => {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

exports.renderHomePageController = async (req, res) => {
  try {
    req.session.flowers = undefined;
    if (req.query.search) {
      const regex = new RegExp(escapeRegex(req.query.search), 'gi');
      const flower = await Flower.find({ name: regex });
      req.session.flowers = flower;
      res.redirect('/products/search');
      /////////////////////
    } else {
      const flowers = await Flower.find({ is_bestSellers: true }).limit(3);
      const bouquets = await Bouquet.find({ is_bestSellers: true }).limit(3);
      const vases = await Vase.find({}).limit(3);

      let user;
      let id;
      if (req.session.passport) {
        user = await User.findById(req.session.passport.user);
        id = req.session.passport.user;
      } else {
        const userIDNotLogin = req.headers.cookie
          ?.split(';')
          ?.filter(elem => {
            return elem.startsWith(' userID');
          })[0]
          ?.split('=')[1];

        if (userIDNotLogin) {
          req.session.userNotLoggedId = userIDNotLogin;
          id = userIDNotLogin;
        }
      }

      let carts = await Cart.find({
        userId: id,
      })
        .where('isCheckedout')
        .equals(false)
        .sort({ createdAt: -1 });

      let totalAmount = 0;
      carts.map(cart => {
        totalAmount += +cart.price * +cart.quantity;
      });
      const total = totalAmount;
      console.log(totalAmount);

      const openCart = req.flash('openCart')[0];
      const cartEmpty = req.flash('emptyCardError')[0];
      const successOrder = req.flash('successOrder')[0];

      const numberOfItemsInCard = carts.length;

      res.render('hiscent/homePage.ejs', {
        flowers,
        bouquets,
        vases,
        carts,
        openCart,
        numberOfItemsInCard,
        totalAmount,
        total,
        user,
        cartEmpty,
        successOrder,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
