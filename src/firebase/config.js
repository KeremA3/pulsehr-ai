import { initializeApp } from "firebase/app";

import {

  getFirestore

} from "firebase/firestore";

/* CONFIG */

const firebaseConfig = {

  apiKey: "AIzaSyDOYO-XgSBWVSnVAyH77X9rzpR_8vPQKqk",

  authDomain:
    "pulsehr-ai.firebaseapp.com",

  projectId:
    "pulsehr-ai",

  storageBucket:
    "pulsehr-ai.firebasestorage.app",

  messagingSenderId:
    "257545347216",

  appId:
    "1:257545347216:web:032fec29e3904fd866b815",

  measurementId:
    "G-WZ5LQ0T0K7"
};

/* APP */

export const app =
  initializeApp(
    firebaseConfig
  );

/* DB */

export const db =
  getFirestore(app);