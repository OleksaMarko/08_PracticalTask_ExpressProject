const express = require("express");
const router = express.Router();

const {
  list,
  create,
  one,
  update,
  remove,
  reviews,
  createReview,
  removeReview,
} = require("../controllers/book");

const {
  validateBook,
  validateExistedBook,
  validateReview,
} = require("../middlewares");

router.get("/", list);
router.put("/", validateExistedBook, create);
router.get("/:id", validateBook, one);
router.patch("/:id", validateBook, update);
router.delete("/:id", validateBook, remove);
router.get("/:id/review", validateBook, reviews);
router.put("/:id/review", validateBook, createReview);

router.delete(
  "/:id/review/:reviewId",
  validateBook,
  validateReview,
  removeReview
);

module.exports = router;
