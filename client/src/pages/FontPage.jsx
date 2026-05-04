import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const FontPage = () => {
  const myStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${assets.header})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundColor: "#f7f7f7",
    backgroundOpacity: "10",
  };
  return (
    <div style={myStyle}>
      <div className=" text-center text-white pt-50 items-center justify-center">
        <img
          src={assets.logo2}
          alt=""
          className="w-52 ml-170 hidden sm:block"
        />
        <p className="pl-10 font-bold text-2xl">
          here you can find your favourite{" "}
          <span className="font-extrabold">
            B<span className="text-[#FFE88A]">oo</span>k
          </span>
        </p>
        <p className="sm:pl-10 pl-0 font-bold text-2xl pt-2">
          or if you want publish your{" "}
          <span className="font-extrabold">
            B<span className="text-[#FFE88A]">oo</span>k
          </span>{" "}
          contact with us
        </p>{" "}
        <Link to="/contact-us">
          <button className="mt-10 ml-10 border border-gray-300 px-6 py-3 font-bold text-xl rounded-2xl cursor-pointer hover:transition-all hover:duration-300 hover:underline hover:border-none">
            contact us
          </button>
        </Link>
        <Link to="/all-books">
          <button className=" mt-10 ml-10 border border-gray-300 px-6 py-3 font-bold text-xl rounded-2xl cursor-pointer hover:transition-all hover:duration-300 hover:underline hover:border-none">
            our{" "}
            <span className="font-extrabold">
              B<span className="text-[#FFE88A]">oo</span>ks
            </span>{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FontPage;
