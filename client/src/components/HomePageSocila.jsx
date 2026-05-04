import React from "react";
import {
  FacebookIcon,
  FileX2Icon,
  InstagramIcon,
  LucideYoutube,
  Twitch,
  TwitchIcon,
  YoutubeIcon,
} from "lucide-react";

const HomePageSocila = () => {
  return (
    <div className="">
      <div className="text-center ml-19 sm:ml-140 mb-20 flex gap-3  sm:gap-20 ">
        <FacebookIcon
          size={50}
          className="bg-gray-200 text-gray-950  p-2 rounded-full cursor-pointer hover:opacity-50 hover:transition-all hover:duration-100"
        />
        <TwitchIcon
          size={50}
          className="bg-gray-200 text-black px-2 pt-1 rounded-full hover:opacity-50 cursor-pointer hover:transition-all hover:duration-100"
        />
        <InstagramIcon
          size={50}
          className="bg-gray-200 text-black  px-2 rounded-full hover:opacity-50 cursor-pointer hover:transition-all hover:duration-100"
        />
        <YoutubeIcon
          size={50}
          className="bg-gray-200 text-black px-2 rounded-full hover:opacity-50 cursor-pointer hover:transition-all hover:duration-100"
        />
      </div>
    </div>
  );
};

export default HomePageSocila;
