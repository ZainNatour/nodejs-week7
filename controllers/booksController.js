const { sequelize, Book } = require("../models/books");

const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    if (updatedBook[1]) {
      res.json(updatedBook[1]);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const deletedBookCount = await Book.destroy({
      where: { id: req.params.id },
    });
    if (deletedBookCount) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};
