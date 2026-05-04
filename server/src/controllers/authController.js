import userModel from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";
import { generateToken } from "../utils/token.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return next(errorHandler(400, "All fields are required"));
    }

    if (password.length < 6) {
      return next(errorHandler(400, "Password must be 6 characters"));
    }

    // check if email is valid regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return next(errorHandler(400, "Invalid email format"));
    }

    const user = await userModel.findOne({ email });

    if (user) {
      return next(errorHandler(400, "User all ready exists"));
    }

    const newUser = new userModel({
      name,
      email,
      password,
    });

    if (newUser) {
      const saveUser = await newUser.save();
      generateToken(saveUser._id, res);

      res.status(201).json({
        success: true,
        message: "User was created",
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      });
    } else {
      next(errorHandler(400, "Invalid user data"));
    }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(errorHandler(400, "All fields required"));
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return next(errorHandler(400, "Invalid credentials"));
    }
    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      return next(errorHandler(400, "Invalid credentials"));
    }

    generateToken(user._id, res);

    res.status(200).json({
      success: true,
      message: "User was login",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

export const logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.status(200).json({ message: "Logged out successfully" });
};

export const getUsers = async (req, res) => {
  const users = await userModel.find({});
  res.json(users);
};

export const deleteUser = async (req, res, next) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.userId);

    if (!user) {
      return next(errorHandler(401, "User not found"));
    }
    res.status(200).json("User has been deleted");
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
