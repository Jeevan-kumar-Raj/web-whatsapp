import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCHQF7IZQEnzQFIQplFv02HH7bYWrC0n38",
  authDomain: "whatapp-clone-6fce2.firebaseapp.com",
  projectId: "whatapp-clone-6fce2",
  storageBucket: "whatapp-clone-6fce2.appspot.com",
  messagingSenderId: "94917640981",
  appId: "1:94917640981:web:961068f8228bc9ecd11f1c",
  measurementId: "G-ZBTWEMVM5Q",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref("images");
const audioStorage = firebase.storage().ref("audios");
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
  db,
  auth,
  provider,
  storage,
  audioStorage,
  createTimestamp,
  serverTimestamp,
};
