const express=require("express");
const routerAdmin=express.Router();
const {postAddProduct,getAllproducts,adminProduct,editProduct}=require("../controllers/admin")

// products


routerAdmin.get("/add-product",getAllproducts);

routerAdmin.post("/add-product",postAddProduct);

routerAdmin.get("/products",adminProduct);

routerAdmin.get("/edit-product/:productId",editProduct);

module.exports={routerAdmin}