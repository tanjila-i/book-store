import { useState } from "react";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { userAuthStore } from "../stores/useAuthStore";

const SigninPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login, isSignin } = userAuthStore();

  const handelSubmit = (e) => {
    e.preventDefault();
    login(formData);
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
        Login your Account{" "}
      </h2>
      <form onSubmit={handelSubmit}>
        <div className="mt-5">
          <label htmlFor="" className="mr-3">
            {" "}
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
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
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Enter Password"
            className="border border-slate-500 px-3 py-0.5 rounded mr-6"
          />
        </div>

        <button
          type="submit"
          className="border border-gray-200 w-50 mt-5 ml-13 rounded-lg"
        >
          Sign In
        </button>
      </form>
      <div className="mt-6 text-center ml-8 text-lg">
        <Link to="/signup">
          Don't have an account? <span className="underline">Signup</span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default SigninPage;
