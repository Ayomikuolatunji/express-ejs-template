
const fs=require("fs");
const path=require("path")
const pathDir=require("../util/path")

class Products{
    constructor(id,title, imageUrl, description, price){
        this.id=id
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
            if(this.id){
              const prodId=products.findIndex(p=>p.id===this.id);
              const newProduct=[...products];
              newProduct[prodId]=this
              fs.writeFile(read, JSON.stringify(newProduct), err => {
                console.log(err);
              });
            }else{
              this.id=Math.random().toString()
              products.push(this);
              fs.writeFile(read, JSON.stringify(products), err => {
                console.log(err);
              });
            }
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
          return  prods(JSON.parse(fileContent));
        }
        const cb =JSON.parse(fileContent);
        const product=cb.find(p=>p.id===id);
    
        prods(product)
      });
    }
    
}

module.exports=Products