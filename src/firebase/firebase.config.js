// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlrmVWGt4Kdh1Emf8e_03TaFP38lIETSg",
    authDomain: "dragon-news-de2ba.firebaseapp.com",
    projectId: "dragon-news-de2ba",
    storageBucket: "dragon-news-de2ba.appspot.com",
    messagingSenderId: "451434302659",
    appId: "1:451434302659:web:8378705e9174b0027c2676"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;