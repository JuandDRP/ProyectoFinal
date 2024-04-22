// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8dSyLSNxRlvhX8PsTQbNEK0ie6XaXn5g",
  authDomain: "login-edya2.firebaseapp.com",
  projectId: "login-edya2",
  storageBucket: "login-edya2.appspot.com",
  messagingSenderId: "89246934117",
  appId: "1:89246934117:web:dff88b4c669c053289128c"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
export default appfirebase;