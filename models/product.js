
const fs=require("fs");
const path=require("path")
const pathDir=require("../util/path")

class Products{
    constructor(title, imageUrl, description, price){
        this.title=title,
        this.price=price,
        this.description=description,
        this.imageUrl=imageUrl
    }

    save(){
          const read = path.join(pathDir,'data', 'products.json');
          fs.readFile(read, (err, fileContent) => {
            let products = [];
            if (!err) {
              products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(read, JSON.stringify(products), err => {
              console.log(err);
            });
          });
    }

     static fetchAll(cb){
        const p = path.join(
             pathDir,
            'data',
            'products.json'
          );
          fs.readFile(p, (err, fileContent) => {
            if (err) {
              return  cb([]);
            }
            cb(JSON.parse(fileContent));
          });
        }
    
}

module.exports=Products