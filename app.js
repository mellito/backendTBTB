const express = require("express");
const configExpress = require("./config/express");
const configMysql = require("./config/mysql");
const handleError = require("./utils/handleError");
const routes = require("./routes");

const app = express();

configExpress(app);
configMysql(app);
routes(app);
handleError(app);

module.exports = app;
