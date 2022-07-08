const express = require("express");
const cors = require("cors");

function configExpress(app) {
  app.use(express.json());
  app.use(cors());
}

module.exports = configExpress;
