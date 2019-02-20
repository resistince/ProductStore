const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");

router.get("all", (req, res) => {
  User.find({}, (err, result) => {
    if (err) res.status(404).json(err);
    res.status(200).send(result);
  });
});
