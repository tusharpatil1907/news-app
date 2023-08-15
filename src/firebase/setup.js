
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC6Dy3PBM5XIk6S1U9zXSulqc-3giI3csM",
  authDomain: "news-hub-d5ee8.firebaseapp.com",
  projectId: "news-hub-d5ee8",
  storageBucket: "news-hub-d5ee8.appspot.com",
  messagingSenderId: "24077975192",
  appId: "1:24077975192:web:50e33591c66e7e73e49aed"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleauthprovider = new GoogleAuthProvider()