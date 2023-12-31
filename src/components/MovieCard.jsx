import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-44 px-2 rounded-md relative overflow-y-hidden">
      <img
        src={IMG_CDN + movie.poster_path}
        alt="Movie Card"
        className="hover:z-10 hover:scale-110 transition-transform duration-300 ease-in-out rounded-md"
      />
    </div>
  );
};

export default MovieCard;
