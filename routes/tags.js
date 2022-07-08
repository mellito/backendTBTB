const { Router } = require("express");

const router = Router();

const {
  getAllTags,
  insertTag,
  updateTag,
  deleteTag,
  getOneTag,
} = require("../Controller/tags");

router.get("/", getAllTags);
router.post("/", insertTag);
router.put("/:id", updateTag);
router.delete("/:id", deleteTag);
router.get("/:id", getOneTag);

module.exports = router;
