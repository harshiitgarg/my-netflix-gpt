import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

const MovieList = ({ title, movies }) => {
  const ref = useRef(null);
  const [arrowLeftDisable, setArrowLeftDisable] = useState(false);
  const [arrowRightDisable, setArrowRightDisable] = useState(true);
  const handleScroll = (element, speed, distance, step) => {
    console.log("clicked");
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) clearInterval(slideTimer);
      if (
        element.scrollLeft === 0 
      ) {
        setArrowLeftDisable(false);
        setArrowRightDisable(true);
      }
      else if (
        element.scrollLeft + element.clientWidth >= element.scrollWidth) {
          setArrowRightDisable(false);
        }
      else {
        setArrowLeftDisable(true);
      }
    }, speed);
  };
  return (
    <div className="px-4 pb-8 pr-8">
      <h1 className="text-2xl pl-2 py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide" ref={ref}>
        <div className="flex">
          {movies?.map((video) => (
            <MovieCard movie={video} key={video.id} />
          ))}
        </div>
      </div>
      <div className="flex pl-2">
        <FaChevronLeft
          className={` ${
            arrowLeftDisable
              ? "bg-gray-900 bg-opacity-60 cursor-pointer"
              : "bg-gray-600 cursor-not-allowed"
          } text-gray-700 my-2 w-8 h-8 p-2 rounded-full `}
          onClick={() => handleScroll(ref.current, 35, 400, -30)}
        />
        <FaChevronRight
          className={` ${
            arrowRightDisable
              ? "bg-gray-900 bg-opacity-60 cursor-pointer"
              : "bg-gray-600 cursor-not-allowed"
          } text-gray-700 m-2 w-8 h-8 p-2 rounded-full `}
          onClick={() => handleScroll(ref.current, 35, 400, 30)}
        />
      </div>
    </div>
  );
};

export default MovieList;
