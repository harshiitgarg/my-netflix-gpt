import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/lang";

const GptSearchBar = () => {
    const language = useSelector((store) => store.config.language);
  return (
    <div className="flex justify-center p-52">
      <form
        action=""
        className="bg-black bg-opacity-85 p-4 w-3/4 flex rounded-md"
      >
        <input
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          className="py-2 px-4 m-2 w-full rounded-md"
        />
        <button className="bg-red-600 py-2 px-4 m-2 rounded-md text-white">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
