import express from "express";
import {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter.get("/books", getAllBooks);
bookRouter.get("/books/:id", getBookById);
bookRouter.post("/books", addBook);
bookRouter.put("/books/:id", updateBook);
bookRouter.delete("/books/:id", deleteBook);

export default bookRouter;
