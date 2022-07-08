const { Router } = require("express");

const router = Router();

const {
  getAllPosts,
  insertPost,
  updatePost,
  deletePost,
  getOnePost,
} = require("../Controller/posts");

router.get("/", getAllPosts);
router.post("/", insertPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.get("/:id", getOnePost);

module.exports = router;
