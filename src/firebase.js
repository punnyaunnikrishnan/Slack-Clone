import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTCvIesAPxn-dDjSQLmByGeltsSQhk9Mw",
    authDomain: "slack-clone-698d4.firebaseapp.com",
    projectId: "slack-clone-698d4",
    storageBucket: "slack-clone-698d4.appspot.com",
    messagingSenderId: "468331597188",
    appId: "1:468331597188:web:91bc5cd5fb13929d54e1d1",
    measurementId: "G-7DMZ32JR6X"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider,db};