const books = require("../data/books");

const validateBook = (req, res, next) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);
  if (!book) {
    return res.status(404).send("Book not found");
  }
  req.book = book;
  next();
};

const validateExistedBook = (req, res, next) => {
  console.log(req);
  const bookTitle = req.body.title;
  const book = books.find((book) => book.title === bookTitle);
  if (book) {
    return res.status(400).send("Book already exist");
  }
  next();
};

const validateReview = (req, res, next) => {
  const book = req.book;
  const reviewId = parseInt(req.params.reviewId);
  const review = book.reviews.find((review) => review.id === reviewId);
  if (!review) {
    return res.status(404).send("Review not found");
  }
  req.review = review;
  next();
};

module.exports = { validateBook, validateExistedBook, validateReview };
