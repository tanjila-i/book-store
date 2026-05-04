import { useState } from "react";

import React from "react";
import { assets } from "../../assets/assets";
import { useBookStore } from "../../stores/useBookStore";
import { LoaderIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const { createBook, isLoading } = useBookStore();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("bookName", bookName);
    formData.append("author", author);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);
    createBook(formData);
    navigate("/dashboard");
  };
  return (
    <div className="mx-35">
      {" "}
      <h1 className="pt-10 px-20 text-2xl font-bold">CreateBook</h1>
      <form onSubmit={handelSubmit}>
        {" "}
        <label htmlFor="bookImg">
          <img
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt="upload_area"
            className="w-26 bg-gray-100 ml-20 mt-8 cursor-pointer"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="bookImg"
          hidden
        />
        <div className="mt-7 ml-19 text-center">
          <label htmlFor="bookName">BOOK NAME:</label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            id="bookName"
            placeholder="Enter Book Name"
            className="ml-3 border border-gray-300 px-5 py-0.5 rounded"
          />
        </div>
        <div className="mt-7 ml-19 text-center">
          <label htmlFor="authorName">EDITOR NAME:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            id="authorName"
            placeholder="Enter Author Name"
            className="ml-3 border border-gray-300 px-5 py-0.5 rounded"
          />
        </div>
        <div className="mt-7 ml-19 text-center">
          <label htmlFor="category">CATEGORY:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
            className="ml-3 border border-gray-300 px-5 py-0.5 rounded"
          />
        </div>
        <div className="mt-7 ml-19 text-center">
          <label htmlFor="price">PRICE:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            className="ml-3 border border-gray-300 px-5 py-0.5 rounded"
          />
        </div>{" "}
        <div className="flex mt-7 ml-19 text-center">
          {" "}
          <p>DESCRIPTION:</p>{" "}
          <textarea
            rows={4}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="ml-3 px-3 rounded py-2 border border-gray-300"
            placeholder="Write book Description"
          />
        </div>
        <button
          type="submit"
          className="text-center px-15 py-2 rounded ml-49 mt-5 cursor-pointer bg-gray-500 hover:bg-gray-800"
        >
          {isLoading ? (
            <LoaderIcon className="w-full h-5 animate-spin text-center" />
          ) : (
            " ADD BOOK"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
