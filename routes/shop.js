const path = require('path');
const express = require('express');
const router = express.Router();

const {allProducts,getIndex,viewCart,getCheckout,viewOrder}=require("../controllers/shop")


router.get('/', getIndex);

router.get("/products",allProducts)

router.get("/cart",viewCart)

router.get('/orders',viewOrder)

router.get("/checkout", getCheckout)

module.exports = router;