// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7plnoNvaE5Rz8Dmd4q-YmzzvXw8LoDCs",
    authDomain: "instagram-clone-4912d.firebaseapp.com",
    projectId: "instagram-clone-4912d",
    storageBucket: "instagram-clone-4912d.appspot.com",
    messagingSenderId: "18219417455",
    appId: "1:18219417455:web:55d88b58bb34403e61729a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage} ;