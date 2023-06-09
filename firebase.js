// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvmOWR2JhBac4e_Wb1baLA_uBu0sF0o3A",
  authDomain: "reflection-d8b5e.firebaseapp.com",
  projectId: "reflection-d8b5e",
  storageBucket: "reflection-d8b5e.appspot.com",
  messagingSenderId: "907075078330",
  appId: "1:907075078330:web:87b836db74309898655a83",
  measurementId: "G-SP9CJEM58X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db };
