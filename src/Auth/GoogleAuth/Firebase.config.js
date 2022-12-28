// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDPeZ7kcOuG1hz-OZK3n-nqteqPLYcXhE",
    authDomain: "social-media-ph.firebaseapp.com",
    projectId: "social-media-ph",
    storageBucket: "social-media-ph.appspot.com",
    messagingSenderId: "249098908374",
    appId: "1:249098908374:web:4d30c4b31bd95afa68cf77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;