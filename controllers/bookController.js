import Book from "../models/bookModel.js";

export const getAllBooks = async (_, res) => {
  try {
    const result = await Book.find();

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json(`Failed to fetch resources: ${error}`);
  }
};

export const getBookById = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const result = await Book.findOne({ _id });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: `Resource not found: ${error}` });
  }
};

export const addBook = async (req, res) => {
  const { name } = req.body;

  try {
    const result = await Book.create({
      name,
    });

    return res.status(201).json(result);
  } catch (error) {
    console.log(`Failed to create resource: ${error}`);
    return res.status(500).json({ message: `Failed to create resource` });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const result = await Book.findOneAndUpdate(
      { _id: id },
      {
        name,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json(result);
  } catch (error) {
    console.log(`Failed to create resource: ${error}`);
    return res.status(500).json({ message: `Failed to create resource` });
  }
};

export const deleteBook = async (req, res) => {
  const { id: _id } = req.params;

  try {
    const result = await Book.findOneAndDelete({ _id });

    return res.status(200).json(result);
  } catch (error) {
    console.log(`Failed to create resource: ${error}`);
    return res.status(500).json({ message: `Failed to create resource` });
  }
};
