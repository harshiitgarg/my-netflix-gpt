import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideos);
  useTrailerVideo(movieId);
  if (!trailerVideo || !trailerVideo[0]) return;
  return (
    <div className="md:h-[600px] bg-black pl-4 md:pl-0 md:-mt-0 -mt-16 md:pt-0 pointer-events-none pt-12">
      {trailerVideo && trailerVideo[0] && <iframe
        className="w-11/12 md:w-[1500px] aspect-video h-64 md:h-[800px] md:-mt-32"
        src={
          "https://www.youtube.com/embed/" + trailerVideo[0].key + "?controls=0&autoplay=1&mute=1&loop=1&showinfo=0&playlist=" + trailerVideo[0].key
        }
        title="YouTube video player"
      ></iframe>}
    </div>
  );
};

export default VideoBackground;
