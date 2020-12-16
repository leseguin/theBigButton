//utils/DatabaseManager.js

import {firestoreDB} from './Utils'


export const GetAllUsersUid  = () => {
  var userUidRef = firestoreDB.collection("usersUid").doc('eeTIbqcjDB0SB4fVaXe2');
  userUidRef.get().then(function(doc) {
      if (doc.exists) {
          const datadoc = doc.data()
          console.log("GetAllUsersUid - Document data:", datadoc.uid);
          console.log("GetAllUsersUid - Document data:", datadoc.uid);
          datadoc.uid.forEach(element => console.log(element));
          datadoc.uid.forEach((item, i) => {
            console.log(item.nid)
          });

          return datadoc.uid
      } else {
          console.log("No such document!");
          return null
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
}


export const GetUserUidWithPseudo  = (pseudo) => {
  var userUidRef = firestoreDB.collection("usersUid").doc('eeTIbqcjDB0SB4fVaXe2');
  userUidRef.get().then(function(doc) {
      if (doc.exists) {
          const datadoc = doc.data()
          datadoc.uid.forEach((item, i) => {
            if(item.pseudo == pseudo){
              console.log(item.uid)
              return item.uid
            }
          });
          return datadoc.uid
      } else {
          console.log("No such document!");
          return null
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
}
