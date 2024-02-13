import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import CastMember from "./CastMember";

const Cast = ({ id }) => {
  const [castDetails, setCastDetails] = useState(null);
  const fetchCast = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/credits?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    setCastDetails(json?.cast);
  };
  useEffect(() => {
    fetchCast();
  }, []);
  if (castDetails) var firstNineCastMembers = castDetails.slice(0, 9);
  return (
    <div className="flex md:gap-4 md:overflow-x-hidden overflow-x-auto no-scrollbar">
      {castDetails &&
        castDetails.length > 0 &&
        firstNineCastMembers.map((detail) => (
          <CastMember
            original_name={detail?.original_name}
            profile_path={detail?.profile_path}
            character={detail?.character}
            key={detail?.id}
          />
        ))}
    </div>
  );
};

export default Cast;
