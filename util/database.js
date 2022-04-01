const Sequelize=require("sequelize");

const sequelize=new Sequelize("node-sql","root","ayoscript222",{
    host:"localhost",
    dialect:"mysql"
});

module.exports=sequelize