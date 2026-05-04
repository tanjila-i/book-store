import express from "express";
import {
  allBookes,
  createBookPost,
  deleteBook,
  updateBook,
} from "../controllers/bookController.js";
import { isAdmin, protectRoute } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";

const bookRoute = express.Router();

bookRoute.post(
  "/create-book",
  protectRoute,
  isAdmin,
  upload.single("image"),
  createBookPost,
);
bookRoute.get("/all-books", allBookes);
bookRoute.delete("/remove-book/:id", protectRoute, isAdmin, deleteBook);
bookRoute.put("/update-book/:id", protectRoute, isAdmin, updateBook);

export default bookRoute;
