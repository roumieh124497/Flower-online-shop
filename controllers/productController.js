const Flower = require('./../models/flowersModel');
const Bouquet = require('./../models/bouquetsModel');
const Vase = require('./../models/vasesModel');

exports.getProductPage = async (req, res) => {
  try {
    req.session.flowers = undefined;
    const flowers = await Flower.find({});
    const bouquets = await Bouquet.find({});
    const vases = await Vase.find({});

    res.render('hiscent/productPage.ejs', {
      flowers,
      bouquets,
      vases,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getProductSeachPage = (req, res) => {
  flowers = req.session.flowers;

  res.render('hiscent/searchPage.ejs', flowers);
};
