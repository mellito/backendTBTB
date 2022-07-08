const PostModel = require("../models/Post");

const allP = async () => {
  const posts = await PostModel.findAll();
  return posts;
};

const insertP = async (tag) => {
  await PostModel.create(tag);
};

const oneP = async (id) => {
  const post = await PostModel.findOne({
    where: { id },
  });
  return post;
};

const updateP = async (id, tag) => {
  await PostModel.update(tag, {
    where: { id },
  });
};

const deleteP = async (id) => {
  await PostModel.destroy({
    where: { id },
  });
};

module.exports = { allP, insertP, oneP, updateP, deleteP };
