import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc,getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiNcbbMykJJCerw2ZFs_SHg8E_y_PzWzM",
  authDomain: "link-8fd42.firebaseapp.com",
  projectId: "link-8fd42",
  storageBucket: "link-8fd42.appspot.com",
  messagingSenderId: "565791221081",
  appId: "1:565791221081:web:1e019ac199d5e945ec9848",
  measurementId: "G-K9ZF5PYNQ7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db

