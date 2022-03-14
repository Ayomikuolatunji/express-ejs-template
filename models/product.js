
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
          this.id=Math.random().toString()
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
      const read = path.join( pathDir, 'data', 'products.json');
        fs.readFile(read, (err, fileContent) => {
          if (err) {
            return  cb([]);
          }
          cb(JSON.parse(fileContent));
        });
    }

    static findById(id,prods){
      const read = path.join( pathDir, 'data', 'products.json');
      fs.readFile(read, (err, fileContent) => {
        if (err) {
          return  prods=[];
        }
        const cb =JSON.parse(fileContent);
        const product=cb.find(p=>p.id===id);
        prods(product)
      });
    }
    
}

module.exports=Products