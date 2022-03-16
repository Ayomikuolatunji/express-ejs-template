const express=require("express");
const routerAdmin=express.Router();
const {postAddProduct,getAllproducts,adminProduct,editProduct,postEditProduct}=require("../controllers/admin")

// products


routerAdmin.get("/add-product",getAllproducts);

routerAdmin.post("/add-product",postAddProduct);

routerAdmin.get("/products",adminProduct);

routerAdmin.get("/edit-product/:productId",editProduct);

routerAdmin.post("/edit-product",postEditProduct);

module.exports={routerAdmin}