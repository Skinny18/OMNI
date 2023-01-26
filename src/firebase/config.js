// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-00XAeArUySoQkTwrA_WTk0NCSIDh0Ms",
  authDomain: "omniproject-e3d11.firebaseapp.com",
  projectId: "omniproject-e3d11",
  storageBucket: "omniproject-e3d11.appspot.com",
  messagingSenderId: "140280707033",
  appId: "1:140280707033:web:3326b575a3327462dc4bc8",
  measurementId: "G-4V4VJKZFN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
