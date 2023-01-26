import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyCsvig4LsRs8fR_G7LbOiwuOXMxuDbFo1o",
  authDomain: "ikkyudatabase.firebaseapp.com",
  projectId: "ikkyudatabase",
  storageBucket: "ikkyudatabase.appspot.com",
  messagingSenderId: "458547962494",
  appId: "1:458547962494:web:35297f132008c3694eae2f",
  measurementId: "G-S05JDFKS83"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 