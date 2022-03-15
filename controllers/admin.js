const Products=require("../models/product");


const postAddProduct=(req,res,next)=>{
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Products(title, imageUrl, description, price);
    product.save()
    res.redirect("/")
}

const getAllproducts=(req, res, next) => {
    res.render("admin/edit-product", {
        title:"add-product", 
        path:"/admin/add-product"})
}
const editproduct=(req, res, next) => {
    res.render("admin/edit-product", {
        title:"add-product", 
        path:"/admin/add-product"})
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

module.exports={postAddProduct,getAllproducts,adminProduct,editproduct}