import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCUEVPGPOyQv6w1x37M5imnQAzMXpdgo1c",
  authDomain: "firemessenger-eec72.firebaseapp.com",
  databaseURL: "https://firemessenger-eec72.firebaseio.com",
  projectId: "firemessenger-eec72",
  storageBucket: "firemessenger-eec72.appspot.com",
  messagingSenderId: "457400744672",
  appId: "1:457400744672:web:2825a8a21ce54c49ef6e85",
  measurementId: "G-HFN0610VH8"
});

const db = firebaseApp.firestore();

export default db;
