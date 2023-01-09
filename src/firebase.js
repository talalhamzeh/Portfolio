
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvA_DWzWYGm3vwPcbRs0HqUPVawQFuxEo",
    authDomain: "portfolio-64253.firebaseapp.com",
    projectId: "portfolio-64253",
    storageBucket: "portfolio-64253.appspot.com",
    messagingSenderId: "514527485691",
    appId: "1:514527485691:web:2e5513760881a975f51a5e"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);