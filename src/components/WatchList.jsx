import React, { useState } from "react";
import { useSelector } from "react-redux";
import WatchListItem from "./WatchListItem";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const WatchList = () => {
  const watchList = useSelector((store) => store.watchList.watchList);
  return (
    <div className="">
      <div className="px-24 py-16 bg-gradient-to-r from-black via-black to-gray-900 text-white h-full">
        {watchList.length !== 0 && <h1 className="text-5xl px-6 py-9">My WatchList :</h1>}
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
            <div className="flex flex-col justify-center items-center gap-5 my-36 scroll-smooth ">
              <h1 className="text-8xl ">Your Watch List is Empty</h1>
              <Link className="bg-red-600  px-2 mt-4 rounded-lg w-32 py-2 text-3xl text-center" to="/browse">
                Browse
              </Link>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WatchList;
