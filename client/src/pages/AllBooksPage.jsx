import React, { useEffect } from "react";
import { useBookStore } from "../stores/useBookStore";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const AllBooksPage = () => {
  const navigate = useNavigate();

  const { getAllBook, allBooks } = useBookStore();

  useEffect(() => {
    getAllBook();
  }, [getAllBook]);
  return (
    <>
      <div className="px-9 sm:px-30 ml-5 pt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 ">
        {allBooks.map((book, index) => {
          return (
            <div
              onClick={() => navigate(`/single-book/${book._id}`)}
              className=" rounded-2xl  hover:opacity-70 cursor-pointer hover:transition-all hover:duration-400"
              key={index}
            >
              <div className="pl-10 sm:pl-33 pt-3">
                {" "}
                <img src={book.image} alt="" className="w-10 pb-2 " />
              </div>

              <h1 className="text-center sm:text-lg font-semibold">
                {book.bookName}
              </h1>
              <p className="text-center text-sm text-gray-300">{book.author}</p>
              <p className="text-center text-xs text-gray-400 font-semiboldbold">
                {book.category}
              </p>
              <p className="text-center mt-0.5 font-bold">{book.price}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default AllBooksPage;
