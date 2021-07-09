import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import firebaseConfig from "./config";

firebase.initializeApp(firebaseConfig);
export default firebase;
