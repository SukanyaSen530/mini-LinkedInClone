// This import loads the firebase namespace.
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8Eae-5t6gRFIOJomEjJTPjIax0T_Jll4",
  authDomain: "linkedin-clone-eb2b1.firebaseapp.com",
  projectId: "linkedin-clone-eb2b1",
  storageBucket: "linkedin-clone-eb2b1.appspot.com",
  messagingSenderId: "802422374005",
  appId: "1:802422374005:web:4d2a0a53111b0964a4c23c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth, firebase };
