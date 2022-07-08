const { Router } = require("express");

const router = Router();

const {
  getAllTags,
  insertTags,
  updateTag,
  deleteTag,
  getOneTag,
} = require("../controller/tags");

router.get("/", getAllTags);
router.post("/", insertTags);
router.put("/:id", updateTag);
router.delete("/:id", deleteTag);
router.get("/:id", getOneTag);

module.exports = router;
