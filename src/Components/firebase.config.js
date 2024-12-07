// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARUC4HLIIhir34Y2F6QkZfFTnMesFzfXs",
  authDomain: "game-review-website-b818c.firebaseapp.com",
  projectId: "game-review-website-b818c",
  storageBucket: "game-review-website-b818c.firebasestorage.app",
  messagingSenderId: "713987946404",
  appId: "1:713987946404:web:ea88bca0d5a3fa8210f331",
  measurementId: "G-T0QJYRR8J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app