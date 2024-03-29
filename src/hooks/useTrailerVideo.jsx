import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideos, removeTrailerVideos } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getTrailerVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const trailer = json.results.filter((video) => video.type === "Trailer");
    dispatch(addTrailerVideos(trailer));
  };
  useEffect(() => {
    getTrailerVideo();
      return () => {
        dispatch(removeTrailerVideos());
    }
  }, []);
};
export default useTrailerVideo;
