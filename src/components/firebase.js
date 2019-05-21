import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAKYt47BBlBeAV3FAxWQREzsXW3-oxcUas",
    authDomain: "fir-curd-3331a.firebaseapp.com",
    databaseURL: "https://fir-curd-3331a.firebaseio.com",
    projectId: "fir-curd-3331a",
    storageBucket: "fir-curd-3331a.appspot.com",
    messagingSenderId: "686747002660",
    appId: "1:686747002660:web:8a30bfc138bcfb5a"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ timestampsInSnapshots: true })
const db = fb.firestore();
export { db, fb }

