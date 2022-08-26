// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5xhFIRq144_wtMttdZGjOtOoZ-KnuHZA",
  authDomain: "weather-app-e93be.firebaseapp.com",
  projectId: "weather-app-e93be",
  storageBucket: "weather-app-e93be.appspot.com",
  messagingSenderId: "997085555226",
  appId: "1:997085555226:web:a75b26efb954c02c10bfa3",
  measurementId: "G-RR8B2B4V6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);