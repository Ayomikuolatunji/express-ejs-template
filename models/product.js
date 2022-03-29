const Sequelize=require("sequelize");
const sequelize=require("../db/database")

sequelize.define("products",{
   id:{
     type:Sequelize.INTEGER,
     autoIncrement:true,
     allowNull:false,
     primary_key:true
   },
   title:{
     type:Sequelize.STRING,
     allowNull:false
   },
   price:{
     type:Sequelize.DOUBLE,
     allowNull:false,
   },
   imageUrl:{
     type:Sequelize.STRING,
     allowNull:false
   },
   description:{
     type:Sequelize.STRING,
     allowNull:false
   }
})

module.exports=sequelize