import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcvSW-hvmp2WvloJzUds22E5tvMbK6K_E",
  authDomain: "notebook-depot.firebaseapp.com",
  projectId: "notebook-depot",
  storageBucket: "notebook-depot.appspot.com",
  messagingSenderId: "500940590769",
  appId: "1:500940590769:web:fc4f9bdc4db78268809c90",
  measurementId: "G-46ZV3FKK7V"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app