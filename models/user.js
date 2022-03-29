const Sequelize = require('sequelize');

const sequelize = require('../db/database');

const User = sequelize.define('user-profile', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
      type:Sequelize.STRING,
      validate:{
        isAlphanumeric: true, 
        len: [2,],  
      },
      allowNull:false
  },
  email:{
      type:Sequelize.STRING,
      validate:{
        isEmail: true,   
      },
      allowNull:false
  }
});

module.exports = User
