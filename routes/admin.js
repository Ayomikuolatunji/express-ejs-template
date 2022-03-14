const express=require("express");
const routerAdmin=express.Router();
const {postAddProduct,getAllproducts,adminProduct}=require("../controllers/admin")

// products


routerAdmin.get("/add-product",getAllproducts)
routerAdmin.post("/add-product",postAddProduct)
routerAdmin.get("/products",adminProduct)
module.exports={routerAdmin}