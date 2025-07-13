const express = require('express');
const { isLoggedIn } = require('../middlewares/isLoggedin');
const router = express.Router();
const products = require('../config/products'); 
const productModel = require('../models/product-model');




router.get('/', (req, res) => {
    res.render('index', { title: 'Home', error: "" });
});

router.get('/shop', isLoggedIn, async (req, res) => {
    let product = await productModel.find();
    res.render('shop', { title: 'Shop', products: product, error: "" });

});


module.exports = router;