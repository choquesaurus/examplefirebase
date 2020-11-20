import firebase from "firebase/app";
//import "firebase/messaging";
import "firebase/firestore";
import "firebase/storage"
import  "firebase/auth"

const {
  REACT_APP_FIREBASE_apiKey,
  REACT_APP_FIREBASE_authDomain,
  REACT_APP_FIREBASE_databaseURL,
  REACT_APP_FIREBASE_projectId,
  REACT_APP_FIREBASE_storageBucket,
  REACT_APP_FIREBASE_messagingSenderId,
  REACT_APP_FIREBASE_appId,
} = process.env;
let firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_apiKey,
  authDomain: REACT_APP_FIREBASE_authDomain,
  databaseURL: REACT_APP_FIREBASE_databaseURL,
  projectId: REACT_APP_FIREBASE_projectId,
  storageBucket: REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: REACT_APP_FIREBASE_messagingSenderId,
  appId: REACT_APP_FIREBASE_appId,
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
//export const messaging = firebase.messaging();
export const auth = firebase.auth()
export const database = firebase.firestore();
export const storage = firebase.storage();
