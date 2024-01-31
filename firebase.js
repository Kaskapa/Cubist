// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAMVL6NQNK9597hQ0UaCfdZ7m4mrPVHECs",
  authDomain: "cubist-app.firebaseapp.com",
  projectId: "cubist-app",
  storageBucket: "cubist-app.appspot.com",
  messagingSenderId: "1009875229309",
  appId: "1:1009875229309:web:3c16d1026a9b0184b4af14",
  measurementId: "G-P0P7G2Z73D"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
