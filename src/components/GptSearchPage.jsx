import React from "react";
import GptSearchBar from "./gptSearchBar";
import Header from "./Header";
import { useSelector } from "react-redux";
import lang from "../utils/lang";

const GptSearchPage = () => {
  const language = useSelector((store) => store.config.language);
  return (
    <div className="">
      <Header />
      <img
        src="\src\assets\bg.jpg"
        alt=""
        className="-z-10 absolute h-[1000px] md:h-[717px] w-full object-cover -mt-28 md:-mt-28"
      />
      <GptSearchBar />
      <h1 className="text-white text-3xl text-center py-16 md:py-8 md:text-5xl">
        {lang[language].message}
      </h1>
    </div>
  );
};

export default GptSearchPage;
