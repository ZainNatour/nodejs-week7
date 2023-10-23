import * as express from "express";
import * as booksController from "../controllers/booksController";

const booksRouter = express.Router();

booksRouter.get("/", booksController.getBooks);
booksRouter.get("/:id", booksController.getBookById);
booksRouter.put("/:id", booksController.updateBook);
booksRouter.delete("/:id", booksController.deleteBook);

export default booksRouter;
