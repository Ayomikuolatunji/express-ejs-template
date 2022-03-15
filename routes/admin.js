const express=require("express");
const routerAdmin=express.Router();
const {postAddProduct,getAllproducts,adminProduct,editproduct}=require("../controllers/admin")

// products


routerAdmin.get("/add-product",getAllproducts);

routerAdmin.post("/add-product",postAddProduct);

routerAdmin.get("/products",adminProduct);

routerAdmin.post("/edit-product/:productId",editproduct);

module.exports={routerAdmin}