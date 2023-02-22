// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATk4PaYGd_koPSOyhw3SR_LglXgpG_-qA",
  authDomain: "delivery-food-9704.firebaseapp.com",
  projectId: "delivery-food-9704",
  storageBucket: "delivery-food-9704.appspot.com",
  messagingSenderId: "47092966948",
  appId: "1:47092966948:web:b62dd0be533e9bd95d5ab1",
  measurementId: "G-KNE2NZYZJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);