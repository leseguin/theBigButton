// Say this is /utils/auth.js
import firebase from './firebase'
import {Alert} from 'react-native'

import * as Facebook from 'expo-facebook';

import {firestoreDB} from './Utils'
//import firebase from './../utils/firebase'

export async function SignInWithFacebook() {

   const appId = Expo.Constants.manifest.extra.facebook.appId;
   const permissions = ['public_profile', 'email'];  // Permissions required, consult Facebook docs

   await Facebook.initializeAsync({
        appId: appId,
      });

   const {
     type,
     token,
     } = await Facebook.logInWithReadPermissionsAsync(
       {permissions}
     );
     switch (type) {
       case 'success': {
         await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
         const credential = firebase.auth.FacebookAuthProvider.credential(token);
         const facebookProfileData = await firebase.auth().signInWithCredential(credential);  // Sign in with Facebook credential
         // Do something with Facebook profile data
         // OR you have subscribed to auth state change, authStateChange handler will process the profile data
         const profile = facebookProfileData.additionalUserInfo.profile
         const pseudo = profile.first_name + profile.last_name
         const currentUser = firebase.auth().currentUser;
         firestoreDB.collection("users")
           .doc(currentUser.uid)
           .set({
             email: currentUser.email,
             pseudo: pseudo,
           });

         return Promise.resolve({type: 'success'});
       }
       case 'cancel': {
         return Promise.reject({type: 'cancel'});
       }
   }
}

export const SignInWithEmailAndPassword = async (email, password) => {
  console.log("SignInWithEmailAndPassword EMAIL :" + email)
  console.log("SignInWithEmailAndPassword PASSWORD :" + password)
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log("SignInWithEmailAndPassword SUCCESS")
        return Promise.resolve({type: 'success'});
    })
    .catch((error) => {
      console.log("SignInWithEmailAndPassword CANCEL")
      var errorCode = error.code;
      var errorMessage = error.message;
      return Promise.reject({type: 'cancel'});
    });
}



export const CreateUserWithEmailAndPassword = async (email, password, pseudo) => {
  console.log("CreateUserWithEmailAndPassword EMAIL :" + email)
  console.log("CreateUserWithEmailAndPassword PASSWORD :" + password)
  try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;
      firestoreDB.collection("users")
        .doc(currentUser.uid)
        .set({
          email: currentUser.email,
          pseudo: pseudo,
        });
    } catch (err) {
      Alert.alert("There is something wrong!!!!", err.message);
    }
}
