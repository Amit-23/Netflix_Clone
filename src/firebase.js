import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDClpJRxAbpQzVOZbJkpUktVTmM_gJKHkY",
  authDomain: "netflixlone2.firebaseapp.com",
  projectId: "netflixlone2",
  storageBucket: "netflixlone2.appspot.com",
  messagingSenderId: "40955334591",
  appId: "1:40955334591:web:d8f45d7ff6383e6542db0a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(firebaseApp);

// Get Auth instance
const auth = getAuth(firebaseApp);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
export default db;
