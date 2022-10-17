// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk61OMI_Ep0z9mI1QlYAl0915IErkrEEg",
  authDomain: "clone-7a750.firebaseapp.com",
  projectId: "clone-7a750",
  storageBucket: "clone-7a750.appspot.com",
  messagingSenderId: "1659354345",
  appId: "1:1659354345:web:7de651990ea3accc8c4478",
  measurementId: "G-QMTFSTP3DB"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const auth = getAuth(app);

// The latest update for auth with db
const auth = firebase.auth();
export const db = app.firestore();

export default auth;