const pool=require("../db/database")
const Cart = require('./cart');



module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
      return pool.execute("INSERT INTO products (id ,title,price,description,imageUrl) VALUE (?, ?, ?, ?,?)",[this.id, this.title,this.price,this.description,this.imageUrl])
  }

  static deleteById(id) {
   
  }

  static fetchAll(cb) {
     return pool.execute("SELECT * FROM products")
    // .then(data=>{
    //     console.log(data[0])
    // })
    // .catch(err=>{
    //     console.log(err)
    // })
  }

  static findById(id, cb) {
    return pool.execute("SELECT * FROM products WHERE products,id=?",[id])
  }
};
