const { DataTypes } = require("sequelize");
const { db } = require("../config/dbConnection");

const PostSchema = db.define("posts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    trim: true,
  },
  description_post: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = PostSchema;
