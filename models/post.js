const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');
const Joi = require('joi');

const Post = sequelize.define('Post', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  Titulo: {
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
  Categoria: {
    type: DataTypes.STRING
  } 
}, 
{ 
  createdAt: 'Fecha_de_creacion', 
  updatedAt: false 
});

Post.sync({ force: true })

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
