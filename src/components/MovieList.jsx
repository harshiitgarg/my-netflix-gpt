import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 pb-8 pr-8">
      <h1 className="text-2xl pl-2 py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="flex">
          {movies?.map((video) => (
            <MovieCard movie={video} key={video.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
