const express = require("express");
require("dotenv").config();
const configExpress = require("./config/express");
const { connectDB } = require("./config/dbConnection");
const handleError = require("./utils/handleError");
const routes = require("./routes");

const app = express();

configExpress(app);
connectDB();
routes(app);
handleError(app);

module.exports = app;
