const path = require('path');
const express = require('express');
const router = express.Router();

const {allProducts} =require("../controllers/product")


router.get('/', allProducts);

module.exports = router;