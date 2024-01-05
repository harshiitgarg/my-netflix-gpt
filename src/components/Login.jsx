import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleClick = () => {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="-mt-14 md:-mt-20">
        <img
          src="src\assets\bg.jpg"
          alt="background"
          className="filter brightness-50 h-screen w-screen object-cover"
        />
      </div>
      <div className="flex justify-center ">
        <form
          action="post"
          className="flex flex-col p-12 bg-black w-[300px] md:w-[450px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-75 h-3/4 text-white"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="m-2 text-3xl mb-8 font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 mx-2 bg-gray-700 rounded-md w-full"
              ref={name}
            />
          )}
          <input
            type="email"
            placeholder="Email or phone number"
            className="p-2 my-4 ml-2 bg-gray-700 rounded-md w-full"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-4 ml-2 bg-gray-700 rounded-md w-full"
            ref={password}
          />
          <p className="m-2 text-red-600 font-bold">{errorMessage}</p>
          <button
            className="bg-red-700 w-full m-2 p-2 py-3 rounded-md my-8 "
            onClick={handleClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div>
            <p className="mx-2 text-gray-600">
              {isSignInForm ? "New to Netflix? " : "Already a User? "}
              <span
                className="text-white cursor-pointer hover:underline"
                onClick={toggleSignUpForm}
              >
                {isSignInForm ? "Sign Up Now" : "Sign In Now."}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
