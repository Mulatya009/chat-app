import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDd2XTySaAA4rB-J2zC6OAP8TfrbwHeRPM",
  authDomain: "chat-app-76d80.firebaseapp.com",
  databaseURL: "https://chat-app-76d80.firebaseio.com",
  projectId: "chat-app-76d80",
  storageBucket: "chat-app-76d80.appspot.com",
  messagingSenderId: "814800702453",
  appId: "1:814800702453:web:d376580d2afee869756ebc",
  measurementId: "G-X64T35JCEV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
