import { useEffect, useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { userAuthStore } from "../stores/useAuthStore";
import { useBookStore } from "../stores/useBookStore";

const Navbar = () => {
  const { authUser, logout, checkAuth } = userAuthStore();

  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value.toLowerCase()); // Convert to lowercase for case-insensitive search
  };

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className="">
      <div className="flex sm:justify-between  items-center text-white sm:px-15 px-1 pt-5">
        <Link to="/home">
          {" "}
          <img src={assets.logo2} alt="logo" className="sm:w-32 w-25 mt-2" />
        </Link>
        <div className="hidden sm:block">
          {" "}
          <div className="inline-flex  items-center justify-center border border-gray-400 px-2 rounded">
            {" "}
            <input
              type="text"
              placeholder="Search Book"
              value={search}
              onChange={handleInputChange}
              className="flex-1 outline-none px-2 py-1 rounded "
            />
            <img
              src={assets.search_icon}
              alt="search_icon"
              className="w-5 h-5 mt-"
            />
          </div>
        </div>

        <div>
          {" "}
          <ul className="flex sm:gap-10 gap-5 ml-2.5">
            <NavLink to="/home">
              <p className="ml-2">Home</p>
            </NavLink>
            <NavLink to="/all-books">
              <p className="flex gap-1">
                <span className="hidden sm:block">All</span> Books
              </p>
            </NavLink>
            <NavLink to="/contact-us" className="hidden sm:block">
              <p>contact us</p>
            </NavLink>
          </ul>
        </div>

        {authUser ? (
          <Link to="/signin" className="ml-5">
            <button
              onClick={logout}
              className="border cursor-pointer border-gray-300 sm:px-5 px-3 py-1 rounded sm:text-sm text-xs ml-4"
            >
              Log Out
            </button>
          </Link>
        ) : (
          <Link to="/signup">
            <button className="border cursor-pointer border-gray-300 sm:px-5 px-3 py-1 rounded sm:text-sm text-xs ml-4">
              SignUp
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
