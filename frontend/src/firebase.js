// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-80e72.firebaseapp.com",
  projectId: "mern-blog-80e72",
  storageBucket: "mern-blog-80e72.appspot.com",
  messagingSenderId: "456406459353",
  appId: "1:456406459353:web:809878ff3d3404e744efc8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

