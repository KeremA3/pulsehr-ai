// Firebase SDK import
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDOYO-XgSBWVSnVAyH77X9rzpR_8vPQKqk",
  authDomain: "pulsehr-ai.firebaseapp.com",
  projectId: "pulsehr-ai",
  storageBucket: "pulsehr-ai.appspot.com",
  messagingSenderId: "257545347216",
  appId: "1:257545347216:web:032fec29e3904fd866b815",
  measurementId: "G-WZ5LQ0T0K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export’lar
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;