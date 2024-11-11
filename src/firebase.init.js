// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr5AvBKWBgOiie5B3-0bqg1gOU5g1VK3c",
  authDomain: "microrig4u.firebaseapp.com",
  projectId: "microrig4u",
  storageBucket: "microrig4u.firebasestorage.app",
  messagingSenderId: "689979319009",
  appId: "1:689979319009:web:b9f556ae137c1c63400da0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
