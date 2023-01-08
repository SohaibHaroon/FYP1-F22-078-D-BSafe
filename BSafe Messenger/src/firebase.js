import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


 const firebaseConfig = {
   apiKey: "AIzaSyDLtxgtryC7tT1ptep7HN01bCkHR4FYSZ0",
   authDomain: "chat-4bb27.firebaseapp.com",
   projectId: "chat-4bb27",
   storageBucket: "chat-4bb27.appspot.com",
   messagingSenderId: "668424705918",
   appId: "1:668424705918:web:73c064d3ffa24b2b9b852f"
};


// const firebaseConfig = {
//     apiKey: "AIzaSyASZ3OoEXrilQzwSlSb3h5SXOi5JaqZBzs",
//     authDomain: "bsafemessenger.firebaseapp.com",
//     projectId: "bsafemessenger",
//     storageBucket: "bsafemessenger.appspot.com",
//     messagingSenderId: "4995053534",
//     appId: "1:4995053534:web:5e1ccc0de36e0d4ac7cf4f"
//   };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();