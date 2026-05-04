import React from "react";
import { Link, NavLink } from "react-router-dom";

const DeshbordSidbar = () => {
  return (
    <div className="min-h-screen w-60 ">
      <Link to="/dashboard">
        <h1 className="text-center pt-10 pb-5 font-extrabold text-2xl ">
          Dashboard
        </h1>
      </Link>{" "}
      <Link to="/dashboard">
        <p className="text-center mt-10 border-r border-b border-t pb-2 pt-1 hover:bg-gray-500">
          Dashboard
        </p>
      </Link>
      <Link to="/create-book">
        <p className="text-center mt-10 border-r border-b border-t pb-2 pt-1 hover:bg-gray-500">
          Create Book Post
        </p>
      </Link>
      <Link to="/books">
        <p className="text-center mt-10 border-r border-b border-t pb-2 pt-1 hover:bg-gray-500">
          All Books Post
        </p>
      </Link>
      <Link to="/all-users">
        <p className="text-center mt-10 border-r border-b border-t pb-2 pt-1 hover:bg-gray-500">
          All Auth Users
        </p>
      </Link>
    </div>
  );
};

export default DeshbordSidbar;
