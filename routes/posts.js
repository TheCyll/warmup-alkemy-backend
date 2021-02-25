const express = require('express');
const router = express.Router();
const { Post, validatePost } = require('../models/post');

router.get('/', async (req, res) => { 
  try {
    const posts = await Post.findAll({
      attributes: ['ID', ['Titulo', 'Título'], 'Imagen', ['Categoria', 'Categoría'], ['Fecha_de_creacion', 'Fecha_de_creación']]
    });    
    
    res.status(200).json({
      ok: true,
      posts
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error
    });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findAll({
      where: {
        ID: id
      }
    });

    if ( post.length == 0) {
      res.status(400).json({
        ok: false,
        error: "Provide a valid id"
      });
    }

    res.status(200).json({
      ok: true,
      post
    });    
  } catch (error) {
    res.status(500).json({
      ok: false,
      error
    });
  } 
});

router.post('/', async (req, res) => { 
  
  const data = req.body; 
  
  const { error } = validatePost(data);
  if (error) {
    return res.status(400).json({
      ok: false,
      error
    });
  }

  try {
    const post = await Post.build(data);
    await post.save();
    res.status(200).json({
      ok: true,
      post
    });
  } catch(error) {
    res.status(500).json({
      ok: false,
      error
    })
  }  
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  
  if( Object.keys(data).length == 0 ) {
    res.status(400).send("You have to send data to update");
  }

  try {
    const [ statusNumber ] = await Post.update(data, {
      where: {
        ID: id
      }
    });

    if ( statusNumber == 0 ) {
      return res.status(400).send("Provide a valid id");
    }

    //res.sendStatus(204); Patch correct use, but no much user feedback
    res.status(200).send("Data updated");

  } catch (error) {  
    res.status(500).send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const statusNumber = await Post.destroy({
      where: {
        ID: id
      }
    });

    if ( statusNumber == 0) {
      return res.status(400).json({
        ok: false,
        error: "Provide a valid id"
      });
    }

    res.status(200).json({
      ok: true,
      message: "Post deleted"
    });   

  } catch (error) {
    res.status(500).json({
      ok: false,
      error: "Server error, try later"
    });
  } 
});

module.exports = router;