import React from "react";

const Loader = () => {
  return (
    <div >
      <div class="flex mt-48 gap-2 justify-center  items-center ">
        <div class="w-8 h-8 rounded-full bg-blue-700 animate-bounce"></div>
        <div class="w-8 h-8 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
        <div class="w-8 h-8 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export default Loader;
