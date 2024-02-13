import React from "react";

const Loader = () => {
  return (
    <div className="bg-gradient-to-r from-black via-black to-slate-900 h-screen pt-36">
      <div className="flex mt-48 gap-2 justify-center items-center">
        <div className="w-4 md:w-8 h-4 md:h-8 rounded-full bg-blue-900 animate-bounce"></div>
        <div className="w-4 md:w-8 h-4 md:h-8 rounded-full bg-blue-900 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 md:w-8 h-4 md:h-8 rounded-full bg-blue-900 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export default Loader;
