const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const passport = require("passport");

const keys = require("./config/keys");

const productRoutes = require("./api/product/routes.js");
const userRoutes = require("./api/user/routes.js");

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(
    keys.mongoUrl,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch(err => {
    console.log(err);
  });

const port = process.env.PORT || 5000;

app.listen(port, err => {
  if (err) console.log(err);
  console.log(`App listening on port ${port}`);
});
