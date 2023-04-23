import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCXpJ87i1ZeF6EjOQWdSLJAPB6yyekREP8",
  authDomain: "giffy-search-app.firebaseapp.com",
  projectId: "giffy-search-app",
  storageBucket: "giffy-search-app.appspot.com",
  messagingSenderId: "603094905845",
  appId: "1:603094905845:web:d9be11923f97cf41c8e6bc",
  measurementId: "G-WGSYZ2M8MC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
// const analytics = getAnalytics(app);