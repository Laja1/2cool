// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdKwm8shqb10VJs9PWP8qrGd31jBl1qX0",
  authDomain: "cool-b2566.firebaseapp.com",
  databaseURL: "https://cool-b2566-default-rtdb.firebaseio.com",
  projectId: "cool-b2566",
  storageBucket: "cool-b2566.appspot.com",
  messagingSenderId: "1049577585914",
  appId: "1:1049577585914:web:4f669dac2777eccce31d43",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { getDocs, collection, addDoc };
