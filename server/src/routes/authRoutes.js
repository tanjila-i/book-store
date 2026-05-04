import express from "express";
import {
  deleteUser,
  getUsers,
  logout,
  signin,
  signup,
} from "../controllers/authController.js";
import { isAdmin, protectRoute } from "../middlewares/authMiddleware.js";

const authRoute = express.Router();

authRoute.post("/signup", signup);
authRoute.post("/login", signin);
authRoute.post("/logout", logout);
authRoute.get("/users", protectRoute, isAdmin, getUsers);
authRoute.delete("/delete/:userId", protectRoute, isAdmin, deleteUser);
authRoute.get("/check", protectRoute, (req, res) =>
  res.status(200).json(req.user)
);
authRoute.get("/isAdmin", protectRoute, isAdmin, (req, res) =>
  res.status(200).json(req.user)
);

export default authRoute;
