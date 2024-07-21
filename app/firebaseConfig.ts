import firebase from "firebase/app";
import 'firebase/auth';
import { getAuth } from "firebase/auth";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDay7TU34enekgulkjetgL229M2OLOhJP4",
  authDomain: "ai-image-gen-969a3.firebaseapp.com",
  projectId: "ai-image-gen-969a3",
  storageBucket: "ai-image-gen-969a3.appspot.com",
  messagingSenderId: "632117727453",
  appId: "1:632117727453:web:3112bce4ea32ab872e4b34"
};

const allApps = firebase.getApps();

if(allApps.length <= 0) firebase.initializeApp(firebaseConfig);

const auth : import("firebase/auth").Auth = getAuth(allApps[0]);

export default { firebase, auth };