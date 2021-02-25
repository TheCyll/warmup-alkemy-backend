const express = require('express');
const { PORT } = require('./config/config');

const app = express();
const db = require('./database/database');

app.use(express.urlencoded({ extended: false })); 
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
