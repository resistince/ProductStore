const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const keys = require("../../config/keys");
const User = require("../../models/user");

router.get("/all", passport.authenticate("jwt", { session: false }), (req, res) => {
  User.find({}, (err, result) => {
    if (err) res.status(404).json(err);
    res.status(200).send(result);
  });
});

router.get("/current", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email,
    name: req.user.name
  });
});

router.get("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
  User.findById(req.params.id, (err, result) => {
    if (err) res.status(404).json(err);
    res.status(200).json(result);
  });
});

router.post("/register", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
    });
  });
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) res.status(404).json("User not found");

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, name: user.name, email: user.email };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({ success: true, token: "Bearer " + token });
          }
        );
      } else {
        res.status(404).json("Invalid password");
      }
    });
  });
});

router.delete("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) res.status(404).json(err);
    res.status(200).json(result);
  });
});

module.exports = router;
