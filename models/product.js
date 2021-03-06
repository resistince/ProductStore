const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Product = new Schema({
  name: String,
  description: String,
  price: String,
  available: Boolean
});

module.exports = Product;