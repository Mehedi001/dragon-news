// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCspPSY31FYdG-WOvWdywq8cc_7SwmyzSE",
  authDomain: "the-news-dragon-ba03f.firebaseapp.com",
  projectId: "the-news-dragon-ba03f",
  storageBucket: "the-news-dragon-ba03f.appspot.com",
  messagingSenderId: "1013210408081",
  appId: "1:1013210408081:web:245e44a29d3717e71b0b30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;