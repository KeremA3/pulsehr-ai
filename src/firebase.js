import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOYO-XgSBWVSnVAyH77X9rzpR_8vPQKqk",

  authDomain:
    "pulsehr-ai.firebaseapp.com",

  projectId: "pulsehr-ai",

  storageBucket:
    "pulsehr-ai.firebasestorage.app",

  messagingSenderId:
    "257545347216",

  appId:
    "1:257545347216:web:032fec29e3904fd866b815"
};

const app =
  initializeApp(firebaseConfig);

export const auth =
  getAuth(app);

export const db =
  getFirestore(app);