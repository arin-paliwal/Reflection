import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBvmOWR2JhBac4e_Wb1baLA_uBu0sF0o3A",
  authDomain: "reflection-d8b5e.firebaseapp.com",
  projectId: "reflection-d8b5e",
  storageBucket: "reflection-d8b5e.appspot.com",
  messagingSenderId: "907075078330",
  appId: "1:907075078330:web:87b836db74309898655a83",
  measurementId: "G-SP9CJEM58X",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db };
