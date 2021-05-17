import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCcFO5br2ECrlNtwBVQsbJRO8zs7IAQf5k",
	authDomain: "slack-clone-437a2.firebaseapp.com",
	projectId: "slack-clone-437a2",
	storageBucket: "slack-clone-437a2.appspot.com",
	messagingSenderId: "348503835408",
	appId: "1:348503835408:web:c682fe36739467f1f69b95",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
