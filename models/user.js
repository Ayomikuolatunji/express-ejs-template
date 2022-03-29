const Sequelize=require("sequelize")
const sequelize=require("../db/database")

const User=sequelize.define("user",{
    id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true    
    },
    name:{
        type:Sequelize.Sequelize.String,
        validate:{
            isAlphanumeric: true,
            min:25,
        },
    },
    email:{
        validate:{
            isEmail: true,
            notEmpty: true,  
        },
        allowNull:false
    }
})

module.exports=User