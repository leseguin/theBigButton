//utils/Utils.js


import firebase from './firebase'

export const firebaseConfig = {
    apiKey: "AIzaSyBdTcaFPZOizwT72_QaHDmMhcCj3zsVEJc",
    authDomain: "thebigbutton-68c7f.firebaseapp.com",
    projectId: "thebigbutton-68c7f",
    storageBucket: "thebigbutton-68c7f.appspot.com",
    messagingSenderId: "1015636506610",
    appId: "1:1015636506610:web:0a640a0ea725bcfe3d1d6b",
    measurementId: "G-4CPJ0V5MHF"
  };

export const firestoreDB = firebase.firestore();

export const stylesLib = {
  mainThemeColor: '#50C9CF',
  mainTextColor: '#F8FFFF',
  redColor: '#a90c0c',
  greyColor: '#BFBFBF',
  lightGreyColor:'#D9E1E1',
  whiteColor:'#FFFFFF'
}



//firebase.initializeApp(Expo.Constants.manifest.extra.firebase);

//export default firebase;
