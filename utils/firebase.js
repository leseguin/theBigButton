///utils/firebase.js

// We should import firebase from this module instead of the default package.
// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";



import * as firebase from 'firebase'  // Should not be used elsewhere in the project

import "firebase/firestore";

if (!firebase.apps.length) {
    firebase.initializeApp(Expo.Constants.manifest.extra.firebase);
}

//firebase.auth().currentUser.getIdToken(true);
export default firebase;
