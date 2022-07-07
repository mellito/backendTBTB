const mysql = require("mysql");
const myconn = require("express-myconnection");

function mysqlConfig(app) {
  const dbOptions = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "@Alexism321",
    database: "library",
  };
  app.use(myconn(mysql, dbOptions, "single"));
}

module.exports = mysqlConfig;
