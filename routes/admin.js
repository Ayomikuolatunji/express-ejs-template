const express=require("express");
const routerAdmin=express.Router();
const {postAddProduct,getAllproducts}=require("../controllers/product")

// products


routerAdmin.get("/add-product",getAllproducts)
routerAdmin.post("/add-product",postAddProduct)

module.exports={routerAdmin}