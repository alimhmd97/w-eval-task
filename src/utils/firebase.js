import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {
  getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB58V_V5DqYMZtu2sHgqmd90ES1fZwrvTU",
  authDomain: "w-task-1d5ae.firebaseapp.com",
  projectId: "w-task-1d5ae",
  storageBucket: "w-task-1d5ae.appspot.com",
  messagingSenderId: "31855089695",
  appId: "1:31855089695:web:e17fdefce843d1e5381d2a",
  measurementId: "G-ZZPD1RK4XZ"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();


export const database = getDatabase();
export const db = getFirestore(app);





