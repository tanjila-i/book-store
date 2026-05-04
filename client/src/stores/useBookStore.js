import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useBookStore = create((set, get) => ({
  isAdmin: null,
  allBooks: [],
  isLoading: false,
  isCheckingAdmin: true,
  checkIsAdmin: async () => {
    try {
      const res = await axiosInstance.get("/user/isAdmin");
      set({ isAdmin: res.data });
    } catch (error) {
      console.log("Error in isAdminCheck", error);
      set({ isAdmin: null });
    } finally {
      set({ isCheckingAdmin: false });
    }
  },
  createBook: async (formData) => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.post("/book/create-book", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      set({ allBooks: res.data });
      toast.success("Create Book post successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Somthing was worng");
    } finally {
      set({ isLoading: false });
    }
  },
  getAllBook: async () => {
    try {
      const res = await axiosInstance.get("/book/all-books");
      set({ allBooks: res.data.allBooks });
    } catch (error) {
      toast.error(error.message);
    }
  },
  deleteBook: async (bookId) => {
    try {
      const res = await axiosInstance.delete(`/book/remove-book/${bookId}`);
      toast.success("book was deleted");
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Somthing was worng");
    }
  },
}));
