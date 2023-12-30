import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { IoMdExit } from "react-icons/io";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
        navigate("/browse");
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
  return (
    <div className="flex justify-between w-screen">
      <div>
        <img
          src="src\assets\Netflix-Logo.png"
          alt="logo"
          className="w-44 absolute z-20 ml-10"
        />
      </div>
      {user && (
        <div className="flex absolute z-20 right-0">
          <img
            src={user?.photoURL}
            alt="user-icon"
            className="w-12 h-12 my-6"
          />
          <button className="mx-4 text-3xl" onClick={handleSignOut}>
            {/* <img src={SIGN_OUT_ICON} alt="Sign Out" />
             */}
            {/* Sign Out */}
            <IoMdExit className="bg-white rounded-md"/>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
