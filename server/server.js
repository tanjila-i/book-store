import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./src/configs/bd.js";
import authRoute from "./src/routes/authRoutes.js";
import connectCloudnary from "./src/configs/cloudinary.js";
import bookRoute from "./src/routes/bookRoute.js";

const app = express();

const port = process.env.PORT || 4000;

connectCloudnary();

app.use(morgan("dev"));

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cookieParser());

// routes
app.use("/api/user", authRoute);
app.use("/api/book", bookRoute);

app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`);
  await connectDB();
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
