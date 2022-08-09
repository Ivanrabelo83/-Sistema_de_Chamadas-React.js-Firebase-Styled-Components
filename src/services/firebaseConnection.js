import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyAl4XXljQYICDtMJvaAd4tWhYLeo_eqH3s",
  authDomain: "sistema-d0954.firebaseapp.com",
  projectId: "sistema-d0954",
  storageBucket: "sistema-d0954.appspot.com",
  messagingSenderId: "438357216933",
  appId: "1:438357216933:web:e518a7c2795d9d62a5474c",
  measurementId: "G-0YDEF8CDWX",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
