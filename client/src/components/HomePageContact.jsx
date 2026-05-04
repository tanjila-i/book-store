import React from "react";
import book_contact from "../assets/book_contact.jpg";
import { Link } from "react-router-dom";
const HomePageContact = () => {
  //   const myStyle = {
  //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)),url(${book_contact})`,
  //     backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat",
  //     height: "60vh",
  //     backgroundColor: "#f7f7f7",
  //     backgroundOpacity: "10",
  //   };
  return (
    <div className="mt-20 mb-20 ">
      <div className="text-center sm:text-2xl font-semibold ">
        <span className="sm:text-4xl text-2xl font-bold ">You</span> written a
        book but don't know where to published. <br /> Here our website here you
        can publish you unpublished book. <br /> If you want publish your book
        you can contact with us
      </div>
      <Link to="/contact-us">
        {" "}
        <button className="cursor-pointer ml-30 sm:ml-180 mt-5 sm:mt-7 rounded-xl border border-gray-200 px-5 py-2">
          Contect us
        </button>
      </Link>
    </div>
  );
};

export default HomePageContact;
