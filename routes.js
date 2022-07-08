const user = require("./routes/tags");
const post = require("./routes/posts");

function routes(app) {
  app.use("/api/tags", user);
  app.use("/api/posts", post);
}

module.exports = routes;
