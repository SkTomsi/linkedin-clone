import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyACvowyVY5AH36-l8-kbNLzOou3TIUq8",
  authDomain: "linkedin-clone-ba21b.firebaseapp.com",
  projectId: "linkedin-clone-ba21b",
  storageBucket: "linkedin-clone-ba21b.appspot.com",
  messagingSenderId: "134703304751",
  appId: "1:134703304751:web:f1487d7f25f0620ec976da",
  measurementId: "G-ZQ21CJMX76",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
