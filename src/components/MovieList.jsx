import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

const MovieList = ({ title, movies }) => {
  const ref = useRef(null);
  const [arrowLeftDisable, setArrowLeftDisable] = useState(false);
  const [arrowRightDisable, setArrowRightDisable] = useState(true);
  const handleScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) clearInterval(slideTimer);
      if (element.scrollLeft === 0) {
        setArrowLeftDisable(false);
        setArrowRightDisable(true);
      } else if (
        element.scrollLeft + element.clientWidth >=
        element.scrollWidth
      ) {
        setArrowRightDisable(false);
      } else {
        setArrowLeftDisable(true);
      }
    }, speed);
  };
  return (
    <div className="px-4 pb-8 pr-8">
      <h1 className="text-2xl md:text-3xl pl-2 py-2 md:py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide" ref={ref}>
        <div className="flex ">
          {movies?.map((video) => (
            <MovieCard movie={video} key={video.id} />
          ))}
        </div>
      </div>
      <div className="flex pl-2 justify-between">
        <FaChevronLeft
          className={` ${
            arrowLeftDisable
              ? "bg-gray-900 cursor-pointer"
              : "bg-gray-600 cursor-not-allowed"
          } hidden md:inline-block text-gray-700 my-2 w-8 h-8 p-2 rounded-full -mt-[135px] z-20`}
          onClick={() => handleScroll(ref.current, 35, 400, -50)}
        />
        <FaChevronRight
          className={` ${
            arrowRightDisable
              ? "bg-gray-900 cursor-pointer"
              : "bg-gray-600 cursor-not-allowed"
          } hidden md:inline-block text-gray-700 my-2 w-8 h-8 p-2 rounded-full -mt-[135px] z-20`}
          onClick={() => handleScroll(ref.current, 35, 400, 50)}
        />
      </div>
    </div>
  );
};

export default MovieList;
