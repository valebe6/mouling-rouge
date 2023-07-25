import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFuRyTlHPdve8Ue-4fPiR66fGmC2YEwak",
  authDomain: "moulin-rouge-f0eda.firebaseapp.com",
  projectId: "moulin-rouge-f0eda",
  storageBucket: "moulin-rouge-f0eda.appspot.com",
  messagingSenderId: "497137610339",
  appId: "1:497137610339:web:9cf5e36486908b876a1256",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
