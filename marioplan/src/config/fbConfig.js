import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyClD-SDbteCBuHujsz0dNsZDakrJFo6Uzw",
  authDomain: "net-ninja-marioplan-5de0b.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-5de0b.firebaseio.com",
  projectId: "net-ninja-marioplan-5de0b",
  storageBucket: "net-ninja-marioplan-5de0b.appspot.com",
  messagingSenderId: "96564704704",
  appId: "1:96564704704:web:0b2be22d6081e0dc"
};

firebase.initializeApp(config);

export default firebase;
