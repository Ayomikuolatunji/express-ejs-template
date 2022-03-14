const Products=require("../models/product");


const postAddProduct=(req,res,next)=>{
    const product=new Products(req.body.title, req.body.price)
    product.save()
    res.redirect("/")
}

const getAllproducts=(req, res, next) => {
    res.render("admin/add-product", {title:"add-product", path:"/admin/add-product"})
}

const adminProduct=(req, res, next) => {
    Products.fetchAll((products)=>{
        res.status(200).render("admin/product",{
            prod:products, 
            title:"My Shopping",
            title:"admin products",
            path:"/admin/products"
        })
    })
}

module.exports={postAddProduct,getAllproducts,adminProduct}