import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  
  apiKey: "AIzaSyC2BoZ6rCxqmOFFXaOJoiqWt_5PFLbnzdg",
  authDomain: "findtagay.firebaseapp.com",
  databaseURL: "https://findtagay.firebaseio.com",
  projectId: "findtagay",
  storageBucket: "findtagay.appspot.com",
  messagingSenderId: "207452849670",
  appId: "1:207452849670:web:07e8ecdb4529870e9da587",
  measurementId: "G-CE4X9HZEK7"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
