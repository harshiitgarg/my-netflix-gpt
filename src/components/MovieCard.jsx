import React from "react";
import { IMG_CDN } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-28 md:w-44 px-2 rounded-md relative overflow-y-hidden group">
      <Link to={"/watch/" + movie.title}>
        <img
          src={IMG_CDN + movie.poster_path}
          alt="Movie Card"
          className=" w-24 md:w-48 transition-transform duration-300 ease-in-out rounded-md group-hover:z-10 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end  justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="text-white h-full bg-gradient-to-b from-transparent to-black w-full text-center pt-48">
            {movie.title}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
