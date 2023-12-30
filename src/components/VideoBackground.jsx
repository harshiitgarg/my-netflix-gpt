import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideos);
  useTrailerVideo(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video h-screen"
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/fhr3MzT6exg?si=pA5Kb2OOD4JW130F&amp;controls=0&autoplay=1&mute=1&loop=1&showinfo=0&amp;autohide=1&modestbranding=1"
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
