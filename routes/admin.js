const express=require("express");
const routerAdmin=express.Router();
const {postAddProduct,getAllproducts}=require("../controllers/admin")

// products


routerAdmin.get("/add-product",getAllproducts)
routerAdmin.post("/add-product",postAddProduct)
routerAdmin.get("/products")
module.exports={routerAdmin}