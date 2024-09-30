// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALw_5abdfQzrkt-0Pb9OkVb39mDWLk4XM",
  authDomain: "magsmile-b9b75.firebaseapp.com",
  projectId: "magsmile-b9b75",
  storageBucket: "magsmile-b9b75.appspot.com",
  messagingSenderId: "570822732029",
  appId: "1:570822732029:web:9d9c45e63df09527d33694",
  measurementId: "G-S4GX04FC2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);