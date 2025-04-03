// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnAgeNSnRiqOWCYJaX2Y4mxkG6i1XKBsA",
  authDomain: "word-search-55cd6.firebaseapp.com",
  projectId: "word-search-55cd6",
  storageBucket: "word-search-55cd6.appspot.com",
  messagingSenderId: "357602931790",
  appId: "1:357602931790:web:484441b8f9b9d611463f1f",
  measurementId: "G-HY5R49LQEF",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
