import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
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
      {user && <div className="flex absolute z-20 right-0">
        <img
          src={user?.photoURL}
          alt="user-icon"
          className="w-12 h-12 rounded-full my-6"
        />
        <button className="mx-4" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
