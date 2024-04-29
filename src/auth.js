// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt5P-30u1jWYfYGJrdMu4IDCyiQhZuiCg",
  authDomain: "fir-auth-6d990.firebaseapp.com",
  projectId: "fir-auth-6d990",
  storageBucket: "fir-auth-6d990.appspot.com",
  messagingSenderId: "762933344689",
  appId: "1:762933344689:web:f63c5b0fd0031984262590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, app };

// Initialize Firebase Authentication and get a reference to the service