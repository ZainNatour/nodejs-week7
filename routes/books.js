const express = require("express");
const booksRouter = express.Router();
const booksController = require("../controllers/booksController");

booksRouter.get("/", booksController.getBooks);
booksRouter.get("/:id", booksController.getBookById);
booksRouter.put("/:id", booksController.updateBook);
booksRouter.delete("/:id", booksController.deleteBook);

module.exports = booksRouter;
