const Products=require("../models/product")

const postAddProduct=(req,res,next)=>{
    const product=new Products(req.body.title, req.body.price)
    product.save()
    res.redirect("/")
}

const getAllproducts=(req, res, next) => {
    res.render("add-product", {title:"add-product", path:"admin/add-product"})
}

const allProducts=(req, res, next) => {
    const products=new Products()
    products.fetchAll()
    res.status(200).render("shop",{
        prod:products, title:"My Shopping",prodTitle:"Great Books",path:"/"
    })
}


module.exports={postAddProduct,getAllproducts,allProducts}