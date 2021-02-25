const Sequelize = require('sequelize');
const { DB } = require('../config/config');
const mysql = require('mysql2');

const sequelize = new Sequelize( DB.NAME, DB.USERNAME, DB.PASSWORD, {  
  host: DB.HOST,
  dialect: DB.DIALECT,
  dialectModule: mysql
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = {
  sequelize 
}