const {
  allTags,
  insertT,
  oneTag,
  updateT,
  deleteT,
} = require("../service/tags");

async function getAllTags(req, res, next) {
  try {
    const tags = await allTags();
    res.json(tags);
  } catch (error) {
    next(error);
  }
}

async function insertTag(req, res, next) {
  try {
    insertT(req.body);
    res.status(201).json("tag created");
  } catch (error) {
    next(error);
  }
}

async function updateTag(req, res, next) {
  try {
    const { id } = req.params;
    const searchTag = await oneTag(id);
    if (searchTag === null) {
      const error = new Error("tag not found");
      error.statusCode = 404;
      return next(error);
    }
    const updatedData = { ...req.body, updatedAt: new Date() };
    await updateT(id, updatedData);
    return res.json("tag updated");
  } catch (error) {
    return next(error);
  }
}

async function deleteTag(req, res, next) {
  try {
    const { id } = req.params;
    const searchTag = await oneTag(id);
    if (searchTag === null) {
      const error = new Error("tag not found");
      error.statusCode = 404;
      return next(error);
    }

    deleteT(id);
    return res.json("tag deleted");
  } catch (error) {
    return next(error);
  }
}

async function getOneTag(req, res, next) {
  try {
    const { id } = req.params;
    const searchTag = await oneTag(id);
    if (searchTag === null) {
      const error = new Error("tag not found");
      error.statusCode = 404;
      return next(error);
    }
    return res.json(searchTag);
  } catch (error) {
    return next(error);
  }
}

module.exports = { getAllTags, insertTag, updateTag, deleteTag, getOneTag };
