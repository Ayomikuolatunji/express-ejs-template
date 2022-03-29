const Sequelize = require('sequelize');

const sequelize = require('../db/database');

const User = sequelize.define('user', {
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
      }
  },
  email:{
      type:Sequelize.STRING,
      validate:{}
  }
});

module.exports = User;
