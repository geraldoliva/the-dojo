import firebase from "/firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpU90p3b7yl7mtOz1E1O5XtFp0cvdn534",
  authDomain: "thedojosite-51bb8.firebaseapp.com",
  projectId: "thedojosite-51bb8",
  storageBucket: "thedojosite-51bb8.appspot.com",
  messagingSenderId: "24199857979",
  appId: "1:24199857979:web:e8bd846af2cdf11881191e",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };
