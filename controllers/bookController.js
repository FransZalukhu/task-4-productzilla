const Book = require("../models/bookModel");

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
};

exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book) res.status(200).json(book);
  else res.status(404).json({ message: "Buku Tidak Ditemukan" });
};

exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (book) res.status(200).json(book);
  else res.status(404).json({ message: "Buku Tidak Ditemukan" });
};

exports.deleteBook = async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (book) res.status(200).json({ message: "Buku Dihapus" });
  else res.status(404).json({ message: "Buku Tidak Ditemukan" });
};
