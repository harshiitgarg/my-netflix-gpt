import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaBookmark } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { toggleShowgptSearch } from "../utils/gptSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { resetLang, setLang } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const path = useParams()
  const user = useSelector((store) => store.user);
  const showgptSearch = useSelector((store) => store.gptSearch.showgptSearch);
  const [isScrolled, setIsScrolled] = useState(false);
  const { path } = useParams();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
        
        if (!path.startsWith("/watch/")) {
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
  };
  const handleClick = (e) => {
    dispatch(setLang(e.target.value));
  };
  const goToWatchList = () => {
    navigate("/WatchList");
  };
  return (
    <div className="flex">
      <div>
        <img src={LOGO} alt="logo" className="w-44 absolute z-20 ml-10 mt-6" />
      </div>
      {user && (
        <div className="flex absolute z-20 right-0">
          {showgptSearch && (
            <select
              className="p-2 mx-2 my-6 bg-gray-800 rounded-lg text-white"
              onClick={handleClick}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option value={language.identifier}>{language.name}</option>
              ))}
            </select>
          )}
          <button
            className="text-white rounded-md h-10 py-2 px-4 bg-yellow-600 my-6 flex"
            onClick={goToWatchList}
          >
            <FaBookmark className="m-1" /> My WatchList
          </button>
          {(
            <button
              className="text-white rounded-md h-10 py-2 px-4 bg-purple-600 mx-4 my-6"
              onClick={handleGptSearch}
            >
              {showgptSearch ? "Home" : "GPT Search"}
            </button>
          )}
          <img
            src={user?.photoURL}
            alt="user-icon"
            className="w-10 h-10 my-6 "
          />
          <button className="mx-4 text-3xl" onClick={handleSignOut}>
            <IoMdExit
              className="bg-white rounded-md bg-opacity-70 h-10 w-10"
              name="Sign Out"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
