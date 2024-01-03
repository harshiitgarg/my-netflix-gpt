import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-72 pl-16 w-screen aspect-video absolute bg-gradient-to-r from-black text-white">
      <h1 className="w-1/2 text-5xl font-bold">{title}</h1>
      <p className="my-6 text-xl w-1/2 ">{overview}</p>
      <div className="flex">
        <button className="bg-white p-3 px-8 text-xl my-2 rounded-md text-black hover:bg-opacity-80 flex">
          <FaPlay className="mt-1.5 mr-2" /> Play
        </button>
        <button className="bg-gray-500 p-3 px-8 text-xl my-2 ml-2 rounded-md bg-opacity-50 flex">
          <IoIosInformationCircleOutline className="mt-1.5 mr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
