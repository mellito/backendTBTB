const TagModel = require("../models/Tag");

async function getAllTags(req, res, next) {
  try {
    const tags = await TagModel.findAll();
    res.json(tags);
  } catch (error) {
    next(error);
  }
}

async function insertTag(req, res, next) {
  try {
    await TagModel.create(req.body);
    res.json("tag created");
  } catch (error) {
    next(error);
  }
}

async function updateTag(req, res, next) {
  try {
    const updatedData = { ...req.body, updatedAt: new Date() };
    const { id } = req.params;
    await TagModel.update(updatedData, {
      where: { id },
    });
    res.json("tag updated");
  } catch (error) {
    next(error);
  }
}

async function deleteTag(req, res, next) {
  try {
    const { id } = req.params;
    const searchTag = await TagModel.findOne({
      where: { id },
    });
    if (searchTag === null) {
      const error = new Error("Tag not found");
      error.statusCode = 404;
      return next(error);
    }

    await TagModel.destroy({
      where: { id },
    });
    return res.json("tag deleted");
  } catch (error) {
    return next(error);
  }
}

async function getOneTag(req, res, next) {
  try {
    const { id } = req.params;
    const searchTag = await TagModel.findOne({
      where: { id },
    });
    if (searchTag === null) {
      const error = new Error("Tag not found");
      error.statusCode = 404;
      return next(error);
    }
    return res.json(searchTag);
  } catch (error) {
    return next(error);
  }
}

module.exports = { getAllTags, insertTag, updateTag, deleteTag, getOneTag };
