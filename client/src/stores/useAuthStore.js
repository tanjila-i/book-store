import toast from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5000" : "/";

export const userAuthStore = create((set, get) => ({
  authUser: null,
  isSignup: false,
  isSignin: false,
  isCheckingAuth: true,
  allUsers: [],

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/user/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in authCheck", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSignup: true });
    try {
      const res = await axiosInstance.post("/user/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      set({ isSignup: false });
    }
  },
  login: async (data) => {
    set({ isSignin: true });
    try {
      const res = await axiosInstance.post("/user/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      set({ isSignin: false });
    }
  },
  logout: async () => {
    try {
      await axiosInstance.post("/user/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Error loggin out");
      console.log("logout error", error);
    }
  },
  getAllUsers: async () => {
    try {
      const res = await axiosInstance.get("/user/users");
      set({ allUsers: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
  deleteUser: async (userId) => {
    try {
      const res = await axiosInstance.delete(`/user/delete/${userId}`);
      toast.success("User delete successfully");
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  },
}));
