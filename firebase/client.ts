// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACvYlN_JikBJ6HHb-C5Rp7nz6cAmG5mWk",
  authDomain: "prepwise-83a74.firebaseapp.com",
  projectId: "prepwise-83a74",
  storageBucket: "prepwise-83a74.firebasestorage.app",
  messagingSenderId: "966936813159",
  appId: "1:966936813159:web:61c903cd6b440bb837fec2",
  measurementId: "G-24HE2TE0GW"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);