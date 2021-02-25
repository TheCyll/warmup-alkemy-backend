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
    type: DataTypes.TEXT,
    allowNull: false
  },
  Imagen: {
    type: DataTypes.TEXT
  },
  Categoria: {
    type: DataTypes.STRING
  } 
}, 
{ 
  createdAt: 'Fecha_de_creacion', 
  updatedAt: false 
});

(async () => {
  await sequelize.sync();
  console.log('Models and tables synced');
})();

function validatePost(registry) {

  const schema = Joi.object({    
    Titulo: Joi.string()      
      .min(2)
      .max(30)    
      .required(),
    Contenido: Joi.string().required(),    
    Imagen: Joi.string().dataUri(),    
    Categoria: Joi.string().alphanum()      
  });

  return schema.validate(registry);
}

module.exports = {
  Post,
  validatePost
};
