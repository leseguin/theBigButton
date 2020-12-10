// Say this is /utils/auth.js
import firebase from './firebase'

import * as Facebook from 'expo-facebook';
//import firebase from './../utils/firebase'

export default async function SignInWithFacebook() {

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
         return Promise.resolve({type: 'success'});
       }
       case 'cancel': {
         return Promise.reject({type: 'cancel'});
       }
   }
}
