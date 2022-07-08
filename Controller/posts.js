const { allP, insertP, oneP, updateP, deleteP } = require("../service/props");

async function getAllPosts(req, res, next) {
  try {
    const tags = await allP();
    res.json(tags);
  } catch (error) {
    next(error);
  }
}

async function insertPost(req, res, next) {
  try {
    insertP(req.body);
    res.status(201).json("post created");
  } catch (error) {
    next(error);
  }
}

async function updatePost(req, res, next) {
  try {
    const { id } = req.params;
    const searchPost = await oneP(id);
    if (searchPost === null) {
      const error = new Error("post not found");
      error.statusCode = 404;
      return next(error);
    }
    const updatedData = { ...req.body, updatedAt: new Date() };
    await updateP(id, updatedData);
    return res.json("post updated");
  } catch (error) {
    return next(error);
  }
}

async function deletePost(req, res, next) {
  try {
    const { id } = req.params;
    const searchPost = await oneP(id);
    if (searchPost === null) {
      const error = new Error("post not found");
      error.statusCode = 404;
      return next(error);
    }

    await deleteP(id);
    return res.json("post deleted");
  } catch (error) {
    return next(error);
  }
}

async function getOnePost(req, res, next) {
  try {
    const { id } = req.params;
    const searchPost = await oneP(id);
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
