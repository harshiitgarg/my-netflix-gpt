import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/lang";
import { openai } from "../utils/openAi";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  const inputText = useRef(null);
  const handleClick = async (e) => {
    e.preventDefault();
    const chatQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      inputText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: chatQuery }],
      model: "gpt-3.5-turbo",
    });
    // console.log(gptResults.choices);
    //rest of the functionality yet to be built
  };
  return (
    <div className="flex justify-center md:px-52 pt-8 md:pt-24">
      <form className="bg-black bg-opacity-85 p-4 w-3/4 flex rounded-md">
        <input
          ref={inputText}
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          className="py-2 px-4 m-2 w-full rounded-md"
        />
        <button
          className="bg-red-600 py-2 px-4 m-2 rounded-md text-white"
          onClick={handleClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
