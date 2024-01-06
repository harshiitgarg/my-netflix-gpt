import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingVideos from "../hooks/useUpcomingVideos";
// import GptSearchPage from "./GptSearchPage";
import GptSearchPage from "./gptSearchPage";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Browse = () => {
  const showgptSearch = useSelector((store) => store.gptSearch.showgptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingVideos();
  return (
    <div>
      <Header />
          <MainContainer />
          <SecondaryContainer />
          <Footer />
    </div>
  );
};

export default Browse;
