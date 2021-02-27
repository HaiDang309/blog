import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "codecuatui-309.firebaseapp.com",
    projectId: "codecuatui-309",
    storageBucket: "codecuatui-309.appspot.com",
    messagingSenderId: "922072348761",
    appId: "1:922072348761:web:1f322e5bc5c133d7171948",
    measurementId: "G-TR3NGEQ760",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
