import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import lang from "../utils/lang";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearchPage = () => {
  const language = useSelector((store) => store.config.language);
  return (
    <div className="bg-gradient-to-b from-black via-black to-slate-900 h-screen">
      <Header />
      {/* <gptSearchBar /> */}
      <h1 className="text-white text-3xl text-center py-16 md:py-8 md:text-6xl">
        {lang[language].message}
      </h1>
    </div>
  );
};

export default GptSearchPage;
