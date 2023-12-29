// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc1ATz93uzP_2raav1FFTr54LkOXcWaxw",
  authDomain: "my-netflix-gpt-168b9.firebaseapp.com",
  projectId: "my-netflix-gpt-168b9",
  storageBucket: "my-netflix-gpt-168b9.appspot.com",
  messagingSenderId: "739567944623",
  appId: "1:739567944623:web:c04c86bf07fb1361aaa55a",
  measurementId: "G-NS9J26TDK7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
