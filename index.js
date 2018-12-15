const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const keys = require('./config/keys');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());

const port = process.env.PORT || 5000;

mongoose.connect(keys.mongoUrl)
  .then(() => {
    console.log('Connected to MongoDb');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`App listening on port ${port}`);
});