const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const productSchema = require("../../models/product");
const Product = mongoose.model("Product", productSchema);

router.get("/all", (req, res) => {
  Product.find({}, (err, result) => {
    if (err) res.status(404).json(err);
    res.status(200).json(result);
  });
});

router.get("/:id", (req, res) => {
  Product.findById(req.params.id, (err, result) => {
    if (err) res.status(400).json(err);
    res.status(200).json(result);
  });
});

router.post("/", (req, res) => {
  if (!req.body) res.sendStatus(400);

  const newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity
  });

  newProduct.save((err, results) => {
    if (err) res.status(400).json(err);
    res.status(200).json(results);
  });
});

router.put("/:id", (req, res) => {
  if (!req.body) res.sendStatus(400);

  const updatedProduct = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity
  };

  const query = { _id: req.params.id };
  Product.findOneAndUpdate(
    query,
    updatedProduct,
    { upsert: true, new: true },
    (err, result) => {
      if (err) res.status(400).json(err);
      res.status(200).json(result);
    }
  );
});

router.delete("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) res.status(400).json(err);
    res.status(200).json(result);
  });
});

module.exports = router;
