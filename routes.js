const tag = require("./routes/tags");
const post = require("./routes/posts");

function routes(app) {
  app.use("/api/tags", tag);
  app.use("/api/posts", post);
}

module.exports = routes;
