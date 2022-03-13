
const products=[]

const postAddProduct=(req,res,next)=>{
    products.push({  
             title:req.body.title,
            price:req.body.price, 
            path:"admin/add-product"
        });
    res.redirect("/")
}
const getAllproducts=(req, res, next) => {
    res.render("add-product", {title:"add-product"})
}

const allProducts=(req, res, next) => {
    console.log(products)
    res.status(200).render("shop",{
        prod:products, title:"My Shopping",prodTitle:"Great Books",path:"/"
    })
}


module.exports={postAddProduct,getAllproducts,allProducts}