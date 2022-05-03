import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB6q7CbvT-VN11tAtfF-_CdX-fRDF4cXdk",
    authDomain: "list-app-19e20.firebaseapp.com",
    projectId: "list-app-19e20",
    storageBucket: "list-app-19e20.appspot.com",
    messagingSenderId: "474263977131",
    appId: "1:474263977131:web:93fe1fc6697ef309fc8bee"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);