//utils/DatabaseManager.js

import react, {useState} from 'react'
import {firestoreDB} from './Utils'


export const GetAllUsersUid  = async () => {
  var userUidRef = firestoreDB.collection("usersUid").doc('eeTIbqcjDB0SB4fVaXe2');
  users = await userUidRef.get().then(function(doc) {
      if (doc.exists) {
          const datadoc = doc.data()
          return datadoc.uid
      } else {
          console.log("No such document!");
          return null
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
  return users
}

export const GetUserUidWithPseudo = async (pseudo) => {
  var userUidRef = firestoreDB.collection("usersUid").doc('eeTIbqcjDB0SB4fVaXe2');
  const userUid = userUidRef.get().then(function(doc) {
      if (doc.exists) {
          const datadoc = doc.data()
          datadoc.uid.forEach((item, i) => {
            if(item.pseudo == pseudo){
              console.log("GetUserUidWithPseudo :  " + item.uid)
              return item.uid
            }
          });
      } else {
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  return userUid
}

export const GetUserDocumentByUid = async (uid) => {
  var userUidRef = firestoreDB.collection("users").doc(uid);
  const userDoc = await userUidRef.get().then(function(doc) {
      if (doc.exists) {
          const datadoc = doc.data()
          console.log("GetUserDocumentByUid docData :" + datadoc)
          return datadoc
      } else {
          console.log("No such document!");
          return null
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  return userDoc
}
