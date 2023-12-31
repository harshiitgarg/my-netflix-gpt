import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideos);
  useTrailerVideo(movieId);
  return (
    <div className="h-screen">
      <iframe
        className="w-screen aspect-video h-[800px] -mt-16"
        src={
          "https://www.youtube.com/embed/fhr3MzT6exg?si=pA5Kb2OOD4JW130F&amp;controls=0&autoplay=1&mute=1&loop=1&amp;&showinfo=0&amp;autohide=1&modestbranding=1"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
