import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
