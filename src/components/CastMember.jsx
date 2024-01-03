import React from "react";
import { DUMMY_IMG, IMG_CDN } from "../utils/constants";

const CastMember = ({ original_name, character, profile_path }) => {
  return (
    <div className="p-2">
      { <img src={profile_path ? IMG_CDN + profile_path : DUMMY_IMG} alt="pfp" className="w-28 m-2 h-36"/>}
      {original_name && <h1 className="mx-2">{original_name}</h1>}
      {character && <h1 className=" mx-2 text-gray-500">{character}</h1>}
    </div>
  );
};

export default CastMember;
