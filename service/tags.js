const TagModel = require("../models/Tag");

const allTags = async () => {
  const tags = await TagModel.findAll();
  return tags;
};

const insertT = async (tag) => {
  await TagModel.create(tag);
};

const oneTag = async (id) => {
  const tag = await TagModel.findOne({
    where: { id },
  });
  return tag;
};

const updateT = async (id, tag) => {
  await TagModel.update(tag, {
    where: { id },
  });
};

const deleteT = async (id) => {
  await TagModel.destroy({
    where: { id },
  });
};

module.exports = { allTags, insertT, oneTag, updateT, deleteT };
