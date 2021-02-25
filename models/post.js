const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');
const Joi = require('joi');

const Post = sequelize.define('Post', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  Título: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Contenido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Imagen: {
    type: DataTypes.STRING
  },
  Categoría: {
    type: DataTypes.STRING
  }  
});

function validatePost(registry) {

  const schema = Joi.object({    
    Título: Joi.string()
      .alphanum()
      .min(2)
      .max(15)    
      .required(),
    Contenido: Joi.string().required(),    
    Imagen: Joi.string().dataUri(),    
    Categoría: Joi.string().alphanum()      
  });

  return schema.validate(registry);
}

module.exports = {
  Post,
  validatePost
};
