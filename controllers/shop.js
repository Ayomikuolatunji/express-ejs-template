const Products=require("../models/product");
const {Cart}=require("../models/cart")


const allProducts=(req, res, next) => {
    Products.fetchAll((products)=>{
        res.status(200).render("shop/product-list",{
            prod:products, 
            title:"My Shopping Lists",
            prodTitle:"Great Books",
            path:"/"
        })
    })
}

const getProduct=(req,res,next)=>{
    const prodId = req.body.productId;
    Products.findById(prodId, product => {
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
}

const postCart=(req,res,next)=>{
    const prodId=req.body.productId
    Products.findById(prodId, (product)=>{
       Cart.addProduct(prodId,product.price)
    })
    res.redirect("/cart")
}

const getIndex=(req, res, next) => {
    Products.fetchAll((products)=>{     
        res.status(200).render("shop/index",{
            prod:products, 
            title:"My Shopping",
            title:"shop",
            path:"/products"
        })
    })
}

const viewCart=(req,res,next)=>{
    res.render("shop/cart", {
        title:"cart", 
        path:"/cart"
    })
}

const viewOrder=(req,res,next)=>{
    res.render("shop/orders", {
        title:"orders", 
        path:"/orders"
    })
}

const getCheckout=(req,res,next)=>{
    res.render("shop/checkout", {
        title:"checkout",
        path:"/checkout"
    })
}
module.exports={allProducts,getIndex,viewCart,getCheckout,viewOrder,getProduct, postCart}