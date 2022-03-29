const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize=require("./db/database")
const Product=require("./models/product");
const User=require("./models/user")

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { userInfo } = require('os');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User,{constraint:true, onDelete:"CASCADE"});
User.hasMany(Product)

sequelize.sync({force:true})
.then(data=>{
    app.listen(3000,()=>{
        console.log("App is connected to the database running on localhost 3000")
    });
})
.catch(err=>{
   console.log(err)
})
