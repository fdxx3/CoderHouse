// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCdfg3HPAg0sDN3BugU_y_JUEmky_K1A2Q",

  authDomain: "navlink.firebaseapp.com",

  projectId: "navlink",

  storageBucket: "navlink.appspot.com",

  messagingSenderId: "845746300853",

  appId: "1:845746300853:web:9f870f714687188c595bfc",

  measurementId: "G-FHXYQE4LE4",
};

// Initialize Firebase

//inciamos la conexion del proyecto react con firebase.
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
