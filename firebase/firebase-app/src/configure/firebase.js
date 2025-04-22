// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq8mQsCBUSqGeuYcMAMj6V9iz7Wkuv_TY",
  authDomain: "react-37cc9.firebaseapp.com",
  projectId: "react-37cc9",
  storageBucket: "react-37cc9.firebasestorage.app",
  messagingSenderId: "520035448766",
  appId: "1:520035448766:web:ed4d1d31ddc70f410b2bef",
  measurementId: "G-KBF4BP6QC7",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const authProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export {auth,authProvider}
