import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  return (
    <div className="bg-black  overflow-x-hidden scrollbar-hide pb-8 pt-16 ">
      <div className="-mt-16 relative z-20 ">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={"Top Rated"}
          movies={movies.topRatedMovies}
        />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList
          title={"Upcoming"}
          movies={movies.upcomingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
