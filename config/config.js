require('dotenv').config();

module.exports = {
  PORT: process.env.PORT = process.env.PORT || 3030,
  DB: {
    NAME: process.env.DATABASE_NAME,
    USERNAME: process.env.DATABASE_USERNAME,
    PASSWORD: process.env.DATABASE_PASSWORD,
    HOST: process.env.DATABASE_HOST,
    DIALECT: process.env.DATABASE_DIALECT
  } 
}