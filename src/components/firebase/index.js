import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDOODTH2l9QPhltqLLfd3waW1Z4F8QCFQ4",
  authDomain: "plantit-coderhouse.firebaseapp.com",
  databaseURL: "https://plantit-coderhouse.firebaseio.com",
  projectId: "plantit-coderhouse",
  storageBucket: "plantit-coderhouse.appspot.com",
  messagingSenderId: "355716924026",
  appId: "1:355716924026:web:3619fbb15c27debfe1b1c3",
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore()
}
