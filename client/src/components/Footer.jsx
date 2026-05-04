import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between sm:px-50 mb-10 px-5 mt-30 ">
        <div className="">
          <img src={assets.logo2} alt="" className="w-30 sm:w-40" />
          <p className="text-sm text-gray-200 px-5 sm:px-7 sm:text-[20px] sm:font-medium">
            Here you can find your favourite
            <br /> Book or if you want publish <br /> your Boo contact with us
          </p>{" "}
        </div>

        <div className="mt-2 sm:mt-5">
          <h1 className="font-semibold sm:font-bold sm:text-2xl">
            Our Contact
          </h1>
          <p className="text-gray-200 mt-2">+00000000</p>
          <p className="text-gray-200 mt-2">+11111111</p>
          <p className="text-gray-200 mt-2">www.books345@gmail.com</p>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2026@ Books -All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
