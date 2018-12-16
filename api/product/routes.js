const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const productSchema = require('../../models/product');
const Product = mongoose.model('Product', productSchema);

router.get('/:id', (req, res) => {
  Product.findById(req.params.id, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).send(result);
  });
});

router.post('/', (req, res) => {
  if (!req.body) res.sendStatus(400);

  const newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    available: req.body.available
  });

  newProduct.save((err, results) => {
    if(err) res.status(400).send(err);
    res.status(200).send(results);
  });
});

router.delete('/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).send(result);
  });
});

module.exports = router;