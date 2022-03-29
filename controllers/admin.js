const Products = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Products.create({
      title:title,
      price:price,
      imageUrl:imageUrl,
      description:description,
      userId:req.user.id
  })
  .then(data=>{
    console.log("created sucessfully")
      return res.redirect("/admin/products")
  })
  .catch(err=>{
    console.log(err)
  })
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Products.findOne({where:{id:prodId}}).then(product=>{
    if (!product) {
      return res.redirect('/');
    }
      return res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  }).catch(err=>{
    console.log(err)
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Products.findOne({where:{id:prodId}})
  .then(product=>{
    product.title=updatedTitle;
    product.price=updatedPrice;
    product.imageUrl=updatedImageUrl;
    product.description=updatedDesc;
    return product.save()
  })
  .then(dir=>{
    res.redirect('/admin/products');
  })
  .catch(err=>{
    console.log(err)
  })

};

exports.getProducts = (req, res, next) => {
  Products.findAll().then(product=>{
    res.render('admin/products', {
      prods: product,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
    }).catch(err=>{
        console.log(err)
    })
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Products.findOne({where:{id:prodId}}).then(product=>{
       return product.destroy()
  })
  .then(red=>{
    res.redirect('/admin/products');
  })
  .catch(err=>{
     console.log(errs)
  })
};
