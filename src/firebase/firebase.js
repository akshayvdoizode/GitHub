import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCOn4WGdSeAFR8_90BUVkQ2VSBP17QtiGA",
  authDomain: "githubclone-cf712.firebaseapp.com",
  projectId: "githubclone-cf712",
  storageBucket: "githubclone-cf712.appspot.com",
  messagingSenderId: "825801467401",
  appId: "1:825801467401:web:92275b69c1b9177f37fad8",
  measurementId: "G-8XG64VVYF7",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
