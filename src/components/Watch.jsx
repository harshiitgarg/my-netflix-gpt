import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_OPTIONS, IMG_CDN } from "../utils/constants";
import { movie_genres } from "../utils/genres";
import { GoDotFill } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import Header from "../components/Header";
import Cast from "./Cast";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchList, removeFromWatchList } from "../utils/watchListSlice";
import { FaPlay } from "react-icons/fa";
import Loader from "../utils/Loader";

const Watch = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const watchListItem = useSelector((store) => store.watchList.watchList);
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const fetchMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        title +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    setMovieDetails(json?.results[0]);
    setLoading(false);
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  if (loading)
    return (
      <Loader />
    );
  if (!movieDetails) return;
  const {
    poster_path,
    genre_ids,
    overview,
    release_date,
    adult,
    vote_average,
    id,
  } = movieDetails;
  const handleAddToWatchList = () => {
    dispatch(addToWatchList(movieDetails));
  };
  const handleRemoveFromWatchList = () => {
    dispatch(removeFromWatchList({ id: id }));
  };
  var isPresent;
  if (watchListItem) {
    isPresent = watchListItem.some((item) => item.title === movieDetails.title);
  }
  const handlePlay = () => {
    navigate("/play/" + id);
  };
  return (
    movieDetails && (
      <div>
        <Header />
        <div className="bg-gradient-to-r from-black via-black to-gray-900 text-white py-32 -mt-24 md:px-12 ">
          <div className="p-4 md:border border-gray-300 flex flex-col md:flex-row rounded-lg">
            <div>
              <img
                src={IMG_CDN + poster_path}
                alt="Poster"
                className="h-48 md:h-80 rounded-lg md:w-fit md:ml-0 ml-4"
              />
            </div>
            <div className="mx-4 md:w-[1100px]">
              <h1 className="text-2xl md:text-5xl my-2">
                {movieDetails?.title}
              </h1>
              <div className="flex my-4 text-gray-400">
                {genre_ids
                  .filter((id) => genre_ids.includes(id))
                  .map((id) => (
                    <div key={id} className="flex">
                      <GoDotFill className="mt-1" />
                      <span className="mx-1">
                        {
                          movie_genres.find(
                            (genre) => Object.keys(genre)[0] === id.toString()
                          )[id]
                        }
                      </span>
                    </div>
                  ))}
                {adult && (
                  <span className="border-2 border-gray-400 text-gray-400 text-sm rounded-full p-1 -mt-1 mx-2">
                    18+
                  </span>
                )}
              </div>
              <p className="md:text-2xl">{overview}</p>
              <div className="my-2">
                Release Date: {release_date.toString()}
              </div>

              <div className="flex gap-1">
                <IoStar className="text-yellow-300 mt-1" />
                Rating : {Math.round(vote_average)} / 10
              </div>
              <div className="flex ">
                <button
                  className="bg-white text-black py-4 px-4 mt-4 rounded-lg mr-2 flex h-10 items-center gap-1 md:hover:bg-gradient-to-r from-gray-900 via-black to-gray-900 md:hover:text-white"
                  onClick={handlePlay}
                >
                  <FaPlay></FaPlay> Play
                </button>
                {isPresent ? (
                  <button
                    className="bg-red-600 py-2 px-4 my-4 rounded-lg md:hover:bg-gradient-to-r from-gray-900 via-black to-gray-900  md:hover:text-red-600"
                    onClick={handleRemoveFromWatchList}
                  >
                    - Remove from WatchList
                  </button>
                ) : (
                  <button
                    className="bg-green-600 py-2 px-4 my-4 rounded-lg md:hover:bg-gradient-to-r from-gray-900 via-black to-gray-900 md:hover:text-green-600"
                    onClick={handleAddToWatchList}
                  >
                    + Add to WatchList
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="text-white text-4xl px-3 py-6">Cast:</div>
          <Cast id={id} />
        </div>
        <Footer />
      </div>
    )
  );
};

export default Watch;
