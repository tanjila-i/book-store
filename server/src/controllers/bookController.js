import bookModel from "../models/bookModel.js";
import { errorHandler } from "../utils/error.js";
import { v2 as cloudinary } from "cloudinary";

export const createBookPost = async (req, res, next) => {
  try {
    const {
      bookName,
      author,
      category,
      description,
      price,
      isStock,
      publishDate,
    } = req.body;

    const imageFile = req.file;

    if (
      !bookName ||
      !author ||
      !category ||
      !description ||
      !price ||
      bookName === "" ||
      author === "" ||
      category === "" ||
      description === "" ||
      price === ""
    ) {
      return next(errorHandler(400, "All fields are required"));
    }

    // upload image to cloudinary

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const imageUrl = imageUpload.secure_url;

    const bookData = {
      bookName,
      author,
      category,
      description,
      price,
      isStock,
      publishDate: Date.now(),
      isStock,
      image: imageUrl,
    };

    const newBookData = new bookModel(bookData);
    await newBookData.save();

    res.status(201).json({ success: true, message: "Book added", newBookData });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const allBookes = async (req, res, next) => {
  try {
    const allBooks = await bookModel.find({});
    res.status(200).json({ success: true, allBooks });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    await bookModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Book was Removed" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const { price, description } = req.body;
    const updateBook = await bookModel.findByIdAndUpdate(req.params.id, {
      price,
      description,
    });
    res.status(200).json({ success: true, message: "product was updated" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
