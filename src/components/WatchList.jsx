import React, { useState } from "react";
import { useSelector } from "react-redux";
import WatchListItem from "./WatchListItem";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const WatchList = () => {
  const watchList = useSelector((store) => store.watchList.watchList);
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/browse")
  }
  return (
    <div className="">
      <div className={`md:px-24 py-16 bg-gradient-to-r from-black via-black to-gray-900 text-white ${watchList.length>1 ? "h-full" : "h-screen"}`}>
        {watchList.length !== 0 && (
          <div className="flex justify-between">
            <h1 className="text-3xl md:text-5xl px-6 md:py-9 ">My WatchList :</h1>
            <button className="bg-red-600  px-2 md:h-12 md:mt-10 mx-8 rounded-lg md:w-32 text-lg md:text-2xl text-center hover:bg-white hover:text-red-600 flex justify-center items-center" onClick={goToHome}>
              Home
              <FaArrowRight className="mt-1 mx-1" />
            </button>
          </div>
        )}
        {watchList.length !== 0 ? (
          watchList.map((item) => (
            <WatchListItem
              original_title={item.original_title}
              poster_path={item.poster_path}
              genre_ids={item.genre_ids}
              id={item.id}
            />
          ))
        ) : (
          <>
            <div className="flex flex-col justify-center items-center gap-5 my-36 scroll-smooth">
              <h1 className="text-4xl text-center md:text-8xl ">Your Watch List is Empty</h1>
              <Link
                className="bg-red-600  px-2 mt-4 rounded-lg w-32 py-1 md:py-2 text-3xl text-center hover:bg-white hover:text-red-600"
                to="/browse"
              >
                Browse
              </Link>
            </div>
          </>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default WatchList;
