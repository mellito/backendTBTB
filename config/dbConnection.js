const { Sequelize } = require("sequelize");

console.log(process.env.MYSQL_USER);
const db = new Sequelize("POST_DATABASE_TBTB", "root", "@Alexism321", {
  host: "localhost",
  dialect: "mysql",
});

db.sync();

const connectDB = async () => {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { db, connectDB };
