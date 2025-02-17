import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAKlH39Y-UlfqTQ264-F-rMIxUNCYx3w0w",
  authDomain: "ghibli-2bca1.firebaseapp.com",
  projectId: "ghibli-2bca1",
  storageBucket: "ghibli-2bca1.firebasestorage.app",
  messagingSenderId: "398700934501",
  appId: "1:398700934501:web:30daecb365b65b830f9d8c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);