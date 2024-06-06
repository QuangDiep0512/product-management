const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("client/pages/product/index");
});

route.get("/create", (req, res) => {
  res.render("client/pages/product/create");
});

module.exports = route;
