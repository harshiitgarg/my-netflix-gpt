import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getTrailerVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const trailer = json.results.filter(
      (video) => video.name === "Official Trailer"
    );
    dispatch(addTrailerVideos(trailer));
  };
  useEffect(() => {
    getTrailerVideo();
  }, []);
};
export default useTrailerVideo;
