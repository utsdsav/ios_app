
import '@firebase/auth';
import '@firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAASqgI4lreGy6uY9Zg4sBaNM1kW3eQl_k",
    authDomain: "cs160-final-project-fe8e3.firebaseapp.com",
    projectId: "cs160-final-project-fe8e3",
    storageBucket: "cs160-final-project-fe8e3.appspot.com",
    messagingSenderId: "330507055582",
    appId: "1:330507055582:web:182d5786f9bb44819a2d4f",
    measurementId: "G-P5J5PPTHZX"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
export { firestore }