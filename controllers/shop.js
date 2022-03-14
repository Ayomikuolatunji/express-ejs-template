const Products=require("../models/product")

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
module.exports={allProducts,getIndex,viewCart,getCheckout,viewOrder}