import { useState } from "react";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { userAuthStore } from "../stores/useAuthStore";

const SignupPage = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { isSignup, signup } = userAuthStore();
  const navigate = useNavigate();

  const handelSubmitForm = (e) => {
    e.preventDefault();
    signup(formData);
    navigate("/home");
  };
  return (
    <div className="text-center items-center pt-40 ">
      {" "}
      <Link to="/home">
        {" "}
        <img
          src={assets.logo2}
          alt="logo"
          className="sm:w-32 w-40  ml-25 sm:ml-175"
        />
      </Link>
      <h2 className="text-2xl mb-4 font-bold text-slate-200">
        Create your new Account{" "}
      </h2>
      <form onSubmit={handelSubmitForm}>
        <div className="">
          <label htmlFor="" className="mr-3">
            {" "}
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="border border-slate-500 px-3 py-0.5 rounded mr-2"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="" className="mr-3">
            {" "}
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setformData({ ...formData, email: e.target.value })
            }
            placeholder="johndoe@gmail.com"
            className="border border-slate-500 px-3 py-0.5 rounded"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="" className="mr-3">
            {" "}
            Password
          </label>
          <input
            type="password"
            onChange={(e) =>
              setformData({ ...formData, password: e.target.value })
            }
            placeholder="Enter Password"
            className="border border-slate-500 px-3 py-0.5 rounded mr-6"
          />
        </div>

        <button
          type="submit"
          className="border border-gray-200 w-50 mt-5 ml-13 rounded-lg"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-6 text-center ml-8 text-lg">
        <Link to="/signin">
          Already have an account? <span className="underline">Login</span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
