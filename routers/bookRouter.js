import authMiddleware from "../middleware/authMiddleware.js";

import express from "express";
import {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter.get("/books", authMiddleware, getAllBooks);
bookRouter.get("/books/:id", getBookById);
bookRouter.post("/books", authMiddleware, addBook);
bookRouter.put("/books/:id", updateBook);
bookRouter.delete("/books/:id", deleteBook);

export default bookRouter;
