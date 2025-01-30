// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app-compat.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpc6anPfdEbykPEzFuW6_OwzZs-OQXofg",
  authDomain: "express-control-e7258.firebaseapp.com",
  projectId: "express-control-e7258",
  storageBucket: "express-control-e7258.firebasestorage.app",
  messagingSenderId: "1064577642474",
  appId: "1:1064577642474:web:b9d1f9eff2a8e8a6d68c93",
  measurementId: "G-VS85QN7BTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
