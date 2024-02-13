import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import { PublishedTimeOfVideo } from "../utils/publishTime";
import Loader from "../utils/Loader";

const PLay = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  useTrailerVideo(title);
  const trailerVideo = useSelector((store) => store.movies.trailerVideos);
  const handleHomeButton = () => {
    navigate("/browse");
  };
  let smScreen = window.innerWidth < 768;
  if (!trailerVideo) return <Loader />;
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 h-screen">
      <Header />
      <div className="flex items-center justify-center">
        {trailerVideo[0] ? (
          <div className="flex flex-col justify-center items-center">
            <iframe
              className="w-11/12 md:w-[1200px] aspect-video h-64 md:h-[600px] pt-4 rounded-lg"
              src={
                "https://www.youtube.com/embed/" +
                trailerVideo[0].key +
                "?autoplay=1"
              }
              title="YouTube video player"
              allowFullScreen
              allow="autoplay"
            ></iframe>
            {smScreen && (
              <div className=" flex flex-col justify-center items-center m-4">
                <h1 className="text-white">{trailerVideo[0].name}</h1>
                <div className="text-gray-500">
                  {"Released: "}
                  <PublishedTimeOfVideo
                    publishedAt={trailerVideo[0].published_at}
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-16 items-center">
            <div className="text-5xl text-white mt-24">Video Not Available</div>
            <button
              className="text-white bg-red-600 py-2 px-4 rounded-lg w-36 md:hover:bg-gradient-to-r from-gray-900 via-black to-gray-900 md:hover:text-red-600"
              onClick={handleHomeButton}
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PLay;
