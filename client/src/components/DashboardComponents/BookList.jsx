import React, { useEffect } from "react";
import { useBookStore } from "../../stores/useBookStore";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const navigate = useNavigate();
  const { getAllBook, allBooks, deleteBook } = useBookStore();

  useEffect(() => {
    getAllBook();
  }, [getAllBook]);

  const handelDelete = (bookId) => {
    deleteBook(bookId);
    navigate("/dashboard");
  };
  return (
    <div className="mx-20 mt-11 ">
      {" "}
      <h1 className="text-xl font-bold">All Books List</h1>
      <div className="flex flex-col gap-2 mt-15">
        {" "}
        <div className=" grid grid-cols-7 items-center text-center py-1 px-2 border  text-sm">
          <b className="ml-3">Book Image</b>
          <b>Book Name</b>
          <b>Book Author</b>
          <b className="mr-10">Book Category</b>
          <b>Book price</b>
          <b>Publish Date</b>
          <b className=""> Delete</b>
        </div>
      </div>
      {allBooks?.map((book, index) => (
        <div className="grid grid-cols-7 pt-4 text-center " key={index}>
          <img src={book.image} alt="book_image" className="w-15 p-2 ml-13" />{" "}
          <p className="pt-6">{book.bookName}</p>
          <p className="pt-6">{book.author}</p>
          <p className="pt-6">{book.category}</p>
          <p className="pt-6">{book.price}</p>
          <p className="pt-6">
            {new Date(book.publishDate).toLocaleDateString()}
          </p>
          <p
            onClick={() => handelDelete(book._id)}
            className="text-red-500 cursor-pointer pt-6"
          >
            Delete
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
