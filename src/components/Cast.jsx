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
  if (castDetails) var firstSixCastMembers = castDetails.slice(0, 10);
  console.log(firstSixCastMembers);
  return (
    <div className="flex gap-4">
      {castDetails &&
        castDetails.length > 0 &&
        firstSixCastMembers.map((detail) => (
          <CastMember
            original_name={detail.original_name}
            profile_path={detail.profile_path}
            character={detail.character}
          />
        ))}
    </div>
  );
};

export default Cast;
