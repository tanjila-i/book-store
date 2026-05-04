import { useEffect, useState } from "react";

import React from "react";
import { Link, useParams } from "react-router-dom";
import { useBookStore } from "../stores/useBookStore";

const SingleBook = () => {
  const { bookId } = useParams();
  const { getAllBook, allBooks } = useBookStore();

  const [bookData, setBookData] = useState(null);

  const fetchBookData = async () => {
    const bookInfo = allBooks.find((book) => book._id === bookId);
    setBookData(bookInfo);
  };

  useEffect(() => {
    fetchBookData(bookData);
  }, [allBooks, bookId]);

  return (
    bookData && (
      <>
        <div className="p-10 sm:px-60  flex flex-col sm:flex-row sm:gap-30 ">
          <div className="sm:pl-38 pl-20 sm:border-b">
            {" "}
            <img src={bookData.image} alt="" className="w-30 sm:w-50" />
          </div>
          <div className="mt-5 sm:border-b ">
            {" "}
            <p className="text-center sm:mt-1 sm:text-end  pt-5 text-lg text-gray-200">
              <span className="font-semibold text-white"> BookName: </span>
              {bookData.bookName}
            </p>
            <p className="text-center sm:mt-1 sm:text-end pt-1 text-lg text-gray-200">
              <span className="font-semibold text-white"> Author: </span>
              {bookData.author}
            </p>
            <p className="text-center sm:mt-1 sm:text-end pt-1 text-lg text-gray-200">
              <span className="font-semibold text-white"> Category: </span>
              {bookData.category}
            </p>
            <p className="text-center sm:mt-1 sm:text-end pt-1 text-lg text-gray-200">
              <span className="font-semibold text-white"> Publish: </span>
              {new Date(bookData.publishDate).toLocaleDateString()}
            </p>{" "}
            <p className="text-center sm:mt-1 sm:text-end pt-1 text-lg text-gray-200">
              <span className="font-semibold text-white"> Price: </span>
              {bookData.price}
            </p>
            <Link to={`/order/${bookData._id}`}>
              {" "}
              <button className="bg-gray-800 mb-1 px-10 py-2 rounded-2xl text-sm sm:ml-39 ml-21 mt-5 sm:mt-15 cursor-pointer">
                Order
              </button>
            </Link>
          </div>
        </div>{" "}
        <p className="px-60 sm:block hidden">
          <span className="font-semibold text-2xl text-white">
            Description:
          </span>
          {bookData.description}
        </p>
      </>
    )
  );
};

export default SingleBook;
