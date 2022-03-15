const path = require('path');
const express = require('express');
const router = express.Router();

const {allProducts,getIndex,viewCart,getCheckout,viewOrder,getProduct, postCart}=require("../controllers/shop")


router.get('/', getIndex);

router.get("/products",allProducts)

router.get("/products/:productId",getProduct);

router.get("/cart",viewCart)

router.get("/cart", postCart)

router.get('/orders',viewOrder)

router.get("/checkout", getCheckout)

module.exports = router;