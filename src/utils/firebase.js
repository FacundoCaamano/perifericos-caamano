// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {Firestore, getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3nRbdN7nm0k-QVMXQUJu-B0DKgXMHvRE",
  authDomain: "perifericos-caamano.firebaseapp.com",
  projectId: "perifericos-caamano",
  storageBucket: "perifericos-caamano.appspot.com",
  messagingSenderId: "595315684773",
  appId: "1:595315684773:web:92cf44834f516c48d6644c"
};

// Initialize Firebase
const app= initializeApp(firebaseConfig);

export const db = getFirestore(app)


//crear una stancia
//export const db = getFirestore(app)