const Order = require('./../models/OrderModel');
const Cart = require('./../models/CartModel');
const User = require('./../models/userModel');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
exports.placeOrderPage = async (req, res) => {
  try {
    const products = [];
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    console.log(order);
    if (order) {
      for (let i = 0; i < order.productId.length; i++) {
        const product = await Cart.findOne({
          _id: order.productId[i].toString(),
        });

        products.push({
          name: product.name,
          quantity: product.quantity,
          price: product.price,
        });
      }
      const key = process.env.STRIPE_API_KEY;
      const totalAmount = +order.totalAmount + 30;
      res.render('hiscent/placeOrderPage.ejs', {
        products,
        totalAmount,
        orderId,
        key,
      });
    } else {
      res.status(400).json({
        message: "Invalid Checkout's id. ",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.placeOrderPost = async (req, res) => {
  try {
    let userId;
    const products = [];
    const extras = [];
    products.push(req.body.productId);

    extras.push(req.body.wrapper);
    const productFinal = products.flat();
    console.log(productFinal);
    const extraFinal = extras.flat();

    const productObject = [];
    for (let i = 0; i < productFinal.length; i++) {
      const oneProduct = await Cart.findOne({
        _id: productFinal[i],
      }).select('_id');
      productObject.push(oneProduct);
    }
    const productObjectFinal = productObject.flat();
    console.log(productObjectFinal);
    //for empty cart
    if (productFinal[0] === undefined) {
      req.flash('emptyCardError', 'Your Cart is empty!');
      req.flash('openCart', 'active');
      return res.redirect('/home');
    }
    //for the userId and finding the user who make the checkout
    if (req.session.passport) {
      user = await User.findById(req.session.passport.user);
      userId = req.session.passport.user;
    } else {
      userId = req.session.userNotLoggedId;
    }

    const order = await Order({
      userId: userId,
      productId: productObjectFinal,
      extra: extraFinal,
      totalAmount: req.body.totalAmount,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      orderFeedback: req.body.orderFeedBack,
      deliveryDate: req.body.date,
    });
    order.save();
    res.redirect(`/checkout/${order._id}`);
    // res.redirect('/home');
  } catch (err) {
    console.log(err);
  }
};
exports.cancelOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findByIdAndDelete(orderId);
    res.redirect('/home');
  } catch (err) {
    console.log(err);
  }
};

exports.confirmUnpaidOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    { _id: req.params.id },
    { isCompleted: true },
  );
  const uodatedCart = await Cart.update(
    { _id: { $in: order.productId } },
    { $set: { isCheckedout: true } },
    { multi: true },
  );
  let id;
  if (req.session.passport) {
    id = req.session.passport.user;
  } else {
    const userIDNotLogin = req.headers.cookie
      ?.split(';')
      ?.filter(elem => {
        return elem.startsWith(' userID');
      })[0]
      ?.split('=')[1];

    if (userIDNotLogin) {
      id = userIDNotLogin;
    }
  }

  req.flash('successOrder', 'We received your order successfully');
  res.redirect('/home');
};

exports.confirmPaidOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  const amount = +(order.totalAmount * 100) + 30 * 100;
  const uodatedCart = await Cart.update(
    { _id: { $in: order.productId } },
    { $set: { isCheckedout: true } },
    { multi: true },
  );

  stripe.customers
    .create({
      email: req.body.stripeEmail,
      source: req.body.stripeToken,
    })
    .then(customer =>
      stripe.charges
        .create({
          amount,
          description: 'Online Payment',
          currency: 'aed',
          customer: customer.id,
        })
        .then(async charge => {
          const updatedOrder = await Order.findByIdAndUpdate(
            {
              _id: req.params.id,
            },
            { isPaid: true, isCompleted: true },
          );
          let id;
          if (req.session.passport) {
            id = req.session.passport.user;
          } else {
            const userIDNotLogin = req.headers.cookie
              ?.split(';')
              ?.filter(elem => {
                return elem.startsWith(' userID');
              })[0]
              ?.split('=')[1];

            if (userIDNotLogin) {
              id = userIDNotLogin;
            }
          }

          req.flash('successOrder', 'We received your order successfully');
          res.redirect('/home');
        }),
    );
};
