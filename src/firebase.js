import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBZSXuTrnnB9mqIHddJ5VGYVw5rJ2MTdhs",

  authDomain: "netflix-5b852.firebaseapp.com",

  projectId: "netflix-5b852",

  storageBucket: "netflix-5b852.appspot.com",

  messagingSenderId: "440541139320",

  appId: "1:440541139320:web:a35913ef9096610bf5388d",

  measurementId: "G-DE9DKNV8XV"

};



const app = initializeApp(firebaseConfig);
export const  auth=getAuth(app)