const express = require('express');
const router = express.Router();
const { Post, validatePost } = require('../models/post');

router.get('/', async (req, res) => {




});

router.get('/:id', async () => {

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
    const post = await Post.create(data);
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
    await Post.update(data, {
      where: {
        ID: id
      }
    });

    //res.sendStatus(204); Patch correct use, but no much user feedback
    res.status(200).send("Data updated");

  } catch (error) {  
    res.status(500).send(error.message);
  }
});

router.delete('/:id', async () => {

});

module.exports = router;
