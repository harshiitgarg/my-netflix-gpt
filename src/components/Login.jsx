import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="src\assets\bg.jpg"
          alt="background"
          className="filter brightness-50"
        />
      </div>
      <div className="flex justify-center">
        <form
          action="post"
          className="flex flex-col p-12 bg-black w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-75 h-3/4 text-white"
        >
          <h1 className="m-2 text-3xl mb-8">{isSignInForm ? "Sign in" : "Sign Up"}</h1>
          {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 ml-2 bg-gray-700 rounded-md w-full"
          />}
          <input
            type="email"
            placeholder="Email or phone number"
            className="p-2 my-4 ml-2 bg-gray-700 rounded-md w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-4 ml-2 bg-gray-700 rounded-md w-full"
          />
          <button className="bg-red-700 w-full m-2 p-2 rounded-md my-8">
          {isSignInForm ? "Sign in" : "Sign Up"}
          </button>
          <div>
            <p className="mx-2 text-gray-600">
            {isSignInForm ? "New to Netflix? " : "Already a User? "}
              <span className="text-white cursor-pointer " onClick={toggleSignUpForm}>
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
