import firebase from "firebase/app";
import "firebase/messaging";
import "firebase/firestore";
import "firebase/storage"
import  "firebase/auth"

let firebaseConfig = {
  apiKey: "AIzaSyD7ROJBVJ3H74BElJy1eXCq1GS-vyEw3_s",
  authDomain: "exampleparcial.firebaseapp.com",
  databaseURL: "https://exampleparcial.firebaseio.com",
  projectId: "exampleparcial",
  storageBucket: "exampleparcial.appspot.com",
  messagingSenderId: "454041125625",
  appId: "1:454041125625:web:b6a2d32e84e4cf8cbb5828"
};
// const {
//   REACT_APP_FIREBASE_apiKey,
//   REACT_APP_FIREBASE_authDomain,
//   REACT_APP_FIREBASE_databaseURL,
//   REACT_APP_FIREBASE_projectId,
//   REACT_APP_FIREBASE_storageBucket,
//   REACT_APP_FIREBASE_messagingSenderId,
//   REACT_APP_FIREBASE_appId,
// } = process.env;
// var firebaseConfig = {
//   apiKey: REACT_APP_FIREBASE_apiKey,
//   authDomain: REACT_APP_FIREBASE_authDomain,
//   databaseURL: REACT_APP_FIREBASE_databaseURL,
//   projectId: REACT_APP_FIREBASE_projectId,
//   storageBucket: REACT_APP_FIREBASE_storageBucket,
//   messagingSenderId: REACT_APP_FIREBASE_messagingSenderId,
//   appId: REACT_APP_FIREBASE_appId,
// };
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const messaging = firebase.messaging();
export const auth = firebase.auth()
export const database = firebase.firestore();
export const storage = firebase.storage();
