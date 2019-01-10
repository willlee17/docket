import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyApxkEeJEBScoLEduIxZdMhNEf7nf9V06w",
   authDomain: "docket-d5160.firebaseapp.com",
   databaseURL: "https://docket-d5160.firebaseio.com",
   projectId: "docket-d5160",
   storageBucket: "docket-d5160.appspot.com",
   messagingSenderId: "271394799444"
 };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
