import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASGvsL8YKv3nQi9jVpa-cn_zaPZ1kpv-k",
  authDomain: "vote-theplanetisyourcanvas.firebaseapp.com",
  projectId: "vote-theplanetisyourcanvas",
  storageBucket: "vote-theplanetisyourcanvas.appspot.com",
  messagingSenderId: "214299572655",
  appId: "1:214299572655:web:a5d5481b9c9cf50e27d75a",
  measurementId: "G-FQW21D18YH",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

//init firebase auth
const auth = getAuth();

export { db, auth };
