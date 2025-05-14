// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEFDyMOJh6TpL0VOSaXZvJFwLZ-a4NNPI",
  authDomain: "alert-system-97186.firebaseapp.com",
  projectId: "alert-system-97186",
  storageBucket: "alert-system-97186.firebasestorage.app",
  messagingSenderId: "719833192433",
  appId: "1:719833192433:web:d8d1b9299baa4386f65650",
  measurementId: "G-WVX0BRKH6B"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
