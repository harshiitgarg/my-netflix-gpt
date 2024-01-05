import React from "react";
import { IMG_CDN } from "../utils/constants";
import { GoDotFill } from "react-icons/go";
import { movie_genres } from "../utils/genres";
import { useDispatch } from "react-redux";
import { removeFromWatchList } from "../utils/watchListSlice";

const WatchListItem = ({ original_title, poster_path, genre_ids, id }) => {
    const dispatch = useDispatch();
    const handleRemoveFromWatchList = () => {
        dispatch(removeFromWatchList({ id: id }));
    }
  return (
    <div className="flex md:p-4 md:border my-8 md:mx-6 mx-2 rounded-lg">
      <img
        src={IMG_CDN + poster_path}
        alt="poster"
        className="w-32 my-8 mx-4 rounded-lg" 
      />
      <div className="flex py-8 flex-col">
        <h1 className="text-2xl md:text-4xl px-2">{original_title}</h1>

        <div className="flex my-4 mx-2 text-gray-400">
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
        </div>
        <button className="bg-red-600 py-2 px-4 my-1 rounded-lg md:w-48 mx-2 md:hover:bg-gradient-to-r from-gray-900 via-black to-gray-900  md:hover:text-red-600" onClick={handleRemoveFromWatchList}>
          - Remove from WatchList
        </button>
      </div>
    </div>
  );
};

export default WatchListItem;
