import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCp9Wqfg0w_KcYkPb5JqCUcEjguIN6OM1E",
  authDomain: "capital-market-saas.firebaseapp.com",
  projectId: "capital-market-saas",
  storageBucket: "capital-market-saas.firebasestorage.app",
  messagingSenderId: "731085422081",
  appId: "1:731085422081:web:a81321647a338981ca8a00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fbAuth = getAuth(app);

export { fbAuth };