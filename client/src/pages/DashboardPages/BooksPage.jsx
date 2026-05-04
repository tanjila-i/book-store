import React from "react";
import DeshbordSidbar from "../../components/DeshbordSidbar";
import BookList from "../../components/DashboardComponents/BookList";

const BooksPage = () => {
  return (
    <div className="flex items-start">
      <DeshbordSidbar />
      <BookList />
    </div>
  );
};

export default BooksPage;
