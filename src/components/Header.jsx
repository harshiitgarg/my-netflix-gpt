import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaBookmark } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { removeShowgptSearch, toggleShowgptSearch } from "../utils/gptSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { resetLang, setLang } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showgptSearch = useSelector((store) => store.gptSearch.showgptSearch);
  // const [isScrolled, setIsScrolled] = useState(false);
  const { path } = useParams();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        if (path && !path?.startsWith("/watch/")) {
          navigate("/browse");
          setShowGptButton(false);
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGptSearch = () => {
    dispatch(toggleShowgptSearch());
    dispatch(resetLang());
    navigate("/gptSearch");
  };
  const handleClick = (e) => {
    dispatch(setLang(e.target.value));
  };
  const goToWatchList = () => {
    navigate("/WatchList");
    dispatch(removeShowgptSearch());
  };
  const handleHomeButton = () => {
    navigate("/browse");
    dispatch(toggleShowgptSearch());
    dispatch(resetLang());
  };
  return (
    <div className="flex justify-between   overflow-x-hidden ">
      <div className="relative z-20 mt-4">
        <Link to="/browse">
          <img
            src={LOGO}
            alt="logo"
            className="w-24 mx-4 md:mx-8 my-2 md:w-44 "
          />
        </Link>
      </div>
      {user && (
        <div className="flex z-20 items-center mt-4 md:mt-0">
          {showgptSearch && (
            <select
              className="p-1 md:p-2 md:mx-4 md:my-6 text-xs md:text-base bg-gray-800 rounded-lg text-white cursor-pointer"
              onClick={handleClick}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option value={language.identifier}>{language.name}</option>
              ))}
            </select>
          )}
          <button
            className="text-white rounded-md md:h-10 text-xs md:text-base md:py-2 md:px-4 p-2 bg-yellow-600 md:hover:text-yellow-600 md:hover:bg-white flex mx-2 md:mx-0"
            onClick={goToWatchList}
          >
            <FaBookmark className="md:m-1 mt-0.5 md:mt-1" /> My WatchList
          </button>
          {!showgptSearch ? (
            <button
              className="text-white rounded-md text-xs md:text-base md:h-10 md:py-2 p-2 md:px-4 bg-purple-600 md:hover:bg-white md:hover:text-purple-600 md:mx-4 mr-2 "
              onClick={handleGptSearch}
            >
              GPT Search
            </button>
          ) : (
            <button
              className="text-white rounded-md text-xs md:text-base md:h-10 md:py-2 p-2 md:px-4 bg-purple-600 md:hover:bg-white md:hover:text-purple-600 md:mx-4 mr-2 "
              onClick={handleHomeButton}
            >
              Home
            </button>
          )}
          <img
            src={user?.photoURL}
            alt="user-icon"
            className="w-10 h-10 hidden md:inline-block mr-4"
          />
          {!showgptSearch && (
            <button className=" mr-2 text-3xl" onClick={handleSignOut}>
              <IoMdExit
                className="bg-white rounded-md bg-opacity-70 md:h-10 md:w-10"
                name="Sign Out"
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
