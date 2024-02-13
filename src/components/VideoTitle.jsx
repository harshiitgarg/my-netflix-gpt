import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview }) => {
  const navigate = useNavigate();
  const handleMoreInfo = () => {
    navigate(`/watch/${title}`);
  };
  const handlepLay = () => {
    navigate(`/watch/${title}`);
  };
  return (
    <div className="pt-72 pl-16 h-full hidden md:inline-block overflow-hidden aspect-video absolute bg-gradient-to-r from-black text-white ">
      <h1 className="w-1/2 text-5xl font-bold">{title}</h1>
      <p className="my-6 text-xl w-1/2 ">{overview}</p>
      <div className="flex">
        <button
          className="bg-white p-3 px-8 text-xl my-2 rounded-md text-black hover:bg-opacity-80 flex"
          onClick={handlepLay}
        >
          <FaPlay className="mt-1.5 mr-2" /> Play
        </button>
        <button
          className="bg-gray-500 p-3 px-8 text-xl my-2 ml-2 rounded-md  flex hover:bg-opacity-50 "
          onClick={handleMoreInfo}
        >
          <IoIosInformationCircleOutline className="mt-1.5 mr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
