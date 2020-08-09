import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBN38rtxgmYHn8_pWBy0ayHfVJ8so7Iv60",
  authDomain: "my-bri-amaz-clone.firebaseapp.com",
  databaseURL: "https://my-bri-amaz-clone.firebaseio.com",
  projectId: "my-bri-amaz-clone",
  storageBucket: "my-bri-amaz-clone.appspot.com",
  messagingSenderId: "300426783057",
  appId: "1:300426783057:web:d2f80fab3f08e4dbe7cb70",
  measurementId: "G-ZFC19SLDN7",
});

const auth = firebase.auth();

export { auth };
