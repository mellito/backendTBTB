const user = require("./routes/user");

function routes(app) {
  app.use("/api/user", user);
}

module.exports = routes;
