import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideos);
  useTrailerVideo(movieId);
  return (
    <div className="md:h-[600px] bg-black pl-4 md:pl-0 md:-mt-0 -mt-16 md:pt-0 pointer-events-none pt-12">
      <iframe
        className="w-11/12 md:w-[1500px] aspect-video h-64 md:h-[800px] md:-mt-32"
        src={
          "https://www.youtube.com/embed/fhr3MzT6exg?si=pA5Kb2OOD4JW130F&amp;controls=0&autoplay=1&mute=1&loop=1&amp;&showinfo=0&amp;autohide=1&modestbranding=1"
        }
        title="YouTube video player"
      ></iframe>
      {/* <iframe
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src={"https://www.youtube.com/embed/" + trailerVideo[0].key +"?autoplay=1&controls=0&loop=1"}
        frameborder="0"
        allowfullscreen
      ></iframe> */}
    </div>
  );
};

export default VideoBackground;
