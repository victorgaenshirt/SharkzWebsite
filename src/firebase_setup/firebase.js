// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDGFc8DhA-QS1Fh0Hp5uK6re6xP6NccZ_8",
    authDomain: "sharkzwebsite.firebaseapp.com",
    projectId: "sharkzwebsite",
    storageBucket: "sharkzwebsite.appspot.com",
    messagingSenderId: "987195377209",
    appId: "1:987195377209:web:df1e45c8e585f281c92fe8",
    measurementId: "G-CF9XT83V3F"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
