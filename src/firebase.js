import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBARZSQxcnvKqKbxHESrvOJc2zUyn2IgUA",
  authDomain: "shopbox-8c5f7.firebaseapp.com",
  databaseURL: "https://shopbox-8c5f7.firebaseio.com",
  projectId: "shopbox-8c5f7",
  storageBucket: "shopbox-8c5f7.appspot.com",
  messagingSenderId: "932286990941",
  appId: "1:932286990941:web:57118dfdbe9921bff69bb4",
  measurementId: "G-LJRFZQTNSH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export  { db, auth };