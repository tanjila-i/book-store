import { useState } from "react";

import React from "react";
import { useParams } from "react-router-dom";
import { useBookStore } from "../stores/useBookStore";
import { useEffect } from "react";

const OrderPage = () => {
  const { bookId } = useParams();
  const { getAllBook, allBooks } = useBookStore();
  const [bookData, setBookData] = useState(null);
  console.log(bookData);

  const fetchBookData = async () => {
    const bookInfo = allBooks.find((book) => book._id === bookId);
    setBookData(bookInfo);
  };

  useEffect(() => {
    fetchBookData(bookData);
  }, [allBooks, bookId]);

  return (
    <div className="px-55 pt-2 max-w-5xl mx-auto">
      <h1 className="text-center mt-5 text-4xl font-semibold">Order Book</h1>
      {bookData && (
        <div className="flex sm:flex-row gap-15 mt-8">
          <img src={bookData.image} alt="book_img" className="mt-3" />
          <div className="mt-15">
            <h1 className="text-3xl font-bold">{bookData.bookName}</h1>
            <p className="mt-2 font-bold text-xl">{bookData.price}</p>
            <p className="mt-2 font-light text-sm">
              {new Date(bookData.publishDate).toLocaleDateString()}
            </p>
            <p
              className={`mt-2 font-bold text-xl ${bookData.isStock ? "text-lime-400" : "text-red-500"}`}
            >
              {bookData.isStock ? "In Stock" : "Out of Stock"}
            </p>

            <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
