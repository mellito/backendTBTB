const express = require("express");
const dotenv = require("dotenv");
const configExpress = require("./config/express");
const { connectDB } = require("./config/dbConnection");
const handleError = require("./utils/handleError");
const routes = require("./routes");

const app = express();

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

configExpress(app);
connectDB();
routes(app);
handleError(app);

module.exports = app;
