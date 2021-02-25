const express = require('express');
const { PORT } = require('./config/config');
const posts = require('./routes/posts');

const app = express();
const db = require('./database/database');

app.use(express.urlencoded({ extended: false })); 
app.use(express.json());

app.use('/posts', posts);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
