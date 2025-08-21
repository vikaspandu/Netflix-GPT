// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkFObRD47rPK4raO2k3FYghkSvcR7j68o",
  authDomain: "netflix-gpt-5114f.firebaseapp.com",
  projectId: "netflix-gpt-5114f",
  storageBucket: "netflix-gpt-5114f.firebasestorage.app",
  messagingSenderId: "157510522493",
  appId: "1:157510522493:web:bfa47845352fbd882a8314",
  measurementId: "G-X36B53SFBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();