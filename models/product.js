
const fs=require("fs");
const path=require("path")
const pathDir=require("../util/path")

class Products{
    constructor(title,price){
        this.title=title,
        this.price=price
    }

    save(){
        const p = path.join(
             pathDir,
            'data',
            'products.json'
          );
          fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
              products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
              console.log(err);
            });
          });
    }

     static fetchAll(){
       return products
    }
}

module.exports=Products