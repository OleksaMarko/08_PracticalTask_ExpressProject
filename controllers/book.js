const books = require("../data/books");

const list = function (req, res, next) {
  res.json(books);
};

const create = function (req, res, next) {
  const createdBook = {
    id: books.length + 1,
    title: req.body.title,
    reviews: [],
  };
  books.push(createdBook);
  res.status(201).json(createdBook);
};

const one = function (req, res, next) {
  res.json(req.book);
};

const update = function (req, res, next) {
  req.book.title = req.body.title || "";
  res.json(req.book);
};

const remove = function (req, res, next) {
  books.splice(books.indexOf(req.book), 1);
  res.status(204).json();
};

const reviews = function (req, res, next) {
  res.json(req.book.reviews);
};

const createReview = function (req, res, next) {
  const newReview = {
    id: req.book.reviews.length + 1,
    comment: req.body.comment,
  };
  req.book.reviews.push(newReview);
  res.status(201).json(newReview);
};

const removeReview = function (req, res, next) {
  const reviewIndex = req.book.reviews.indexOf(req.review);
  req.book.reviews.splice(reviewIndex, 1);
  res.sendStatus(204);
};

module.exports = {
  list,
  create,
  one,
  update,
  remove,
  reviews,
  createReview,
  removeReview,
};
