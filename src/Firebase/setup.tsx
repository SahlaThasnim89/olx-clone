import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAf8O8beVcCGkoyKsZV36LdL1TGL9r3WOU",
  authDomain: "olx-clone-380d1.firebaseapp.com",
  projectId: "olx-clone-380d1",
  storageBucket: "olx-clone-380d1.appspot.com",
  messagingSenderId: "499092049844",
  appId: "1:499092049844:web:a54f155ba5b80cebd62ce1"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const googleProvider=new GoogleAuthProvider()

 