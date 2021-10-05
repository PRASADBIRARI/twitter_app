// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCDjq2jsWLuTzHNATSUXCgGPb1nhZi-THU",
    authDomain: "twitterclone-d8c25.firebaseapp.com",
    projectId: "twitterclone-d8c25",
    storageBucket: "twitterclone-d8c25.appspot.com",
    messagingSenderId: "204852445684",
    appId: "1:204852445684:web:7536839b17002a829879a1",
    measurementId: "G-6RKW2BKWSP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
