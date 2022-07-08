const PostModel = require("../models/Post");

async function getAllPosts(req, res, next) {
  try {
    const tags = await PostModel.findAll();
    res.json(tags);
  } catch (error) {
    next(error);
  }
}

async function insertPost(req, res, next) {
  try {
    await PostModel.create(req.body);
    res.json("post created");
  } catch (error) {
    next(error);
  }
}

async function updatePost(req, res, next) {
  try {
    const updatedData = { ...req.body, updatedAt: new Date() };
    const { id } = req.params;
    await PostModel.update(updatedData, {
      where: { id },
    });
    res.json("post updated");
  } catch (error) {
    next(error);
  }
}

async function deletePost(req, res, next) {
  try {
    const { id } = req.params;
    const searchPost = await PostModel.findOne({
      where: { id },
    });
    if (searchPost === null) {
      const error = new Error("post not found");
      error.statusCode = 404;
      return next(error);
    }

    await PostModel.destroy({
      where: { id },
    });
    return res.json("post deleted");
  } catch (error) {
    return next(error);
  }
}

async function getOnePost(req, res, next) {
  try {
    const { id } = req.params;
    const searchPost = await PostModel.findOne({
      where: { id },
    });
    if (searchPost === null) {
      const error = new Error("post not found");
      error.statusCode = 404;
      return next(error);
    }
    return res.json(searchPost);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAllPosts,
  insertPost,
  updatePost,
  deletePost,
  getOnePost,
};
