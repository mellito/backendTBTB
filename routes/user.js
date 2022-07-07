const { Router } = require("express");
const router = Router();
const {
  getallBooks,
  insertBooks,
  deleteBook,
  updateBook,
} = require("../controller/user");

router.get("/", getallBooks);
router.post("/", insertBooks);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);

module.exports = router;
