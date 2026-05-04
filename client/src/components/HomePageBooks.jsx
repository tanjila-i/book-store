import React, { useEffect } from "react";
import { useBookStore } from "../stores/useBookStore";
import { useNavigate } from "react-router-dom";

const HomePageBooks = () => {
  const { getAllBook, allBooks } = useBookStore();
  const navigate = useNavigate();

  useEffect(() => {
    getAllBook();
  }, [getAllBook]);
  return (
    <div className="px-9  sm:px-10 ml-6 sm:ml-1 sm:pt-10 pt-5 grid grid-cols-2 gap-5 sm:grid-cols-4 ">
      {allBooks.slice(0, 12).map((book, index) => {
        return (
          <div
            className="hover:opacity-70 cursor-pointer hover:transition-all hover:duration-400"
            key={index}
            onClick={() => navigate(`/single-book/${book._id}`)}
          >
            <div className="pl-6 sm:pl-32 pt-3 pb-2">
              {" "}
              <img src={book.image} alt="image" className="w-15 sm:w-20 " />
            </div>

            <h1 className="text-center sm:text-2xl sm:font-semibold">
              {book.bookName}
            </h1>
            <p className="text-center text-lg text-gray-300">{book.author}</p>
            <p className="text-center text-sm text-gray-400 font-semibold">
              {book.category}
            </p>
            <p className="text-center mt-0.5 font-bold">{book.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomePageBooks;
