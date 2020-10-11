import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCEFgiLlaI8xizrHz6w_E34S5tEoN67fUE",
  authDomain: "shopbox-2af71.firebaseapp.com",
  databaseURL: "https://shopbox-2af71.firebaseio.com",
  projectId: "shopbox-2af71",
  storageBucket: "shopbox-2af71.appspot.com",
  messagingSenderId: "446056493378",
  appId: "1:446056493378:web:d29d46e99218549ac9d8db",
  measurementId: "G-2K9CRGBR3V"
});

// const db = firebaseApp.firestore();

const auth = firebase.auth();

export  { auth };