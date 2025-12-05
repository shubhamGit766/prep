// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO7MASz086NJnAVCB9xlMMxO7sksQS4mo",
  authDomain: "prepwise-cc472.firebaseapp.com",
  projectId: "prepwise-cc472",
  storageBucket: "prepwise-cc472.firebasestorage.app",
  messagingSenderId: "80753500698",
  appId: "1:80753500698:web:4161f108bd8d41356367a3",
  measurementId: "G-4Y6ZWVN12M"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
