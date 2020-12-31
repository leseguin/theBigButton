//utils/MessagesManager.js

import {firestoreDB} from './Utils'
import firebase from './firebase'


// TODO: Make currentUser a global variable
export const sendMessageTo = (message,userUid) => {
  const currentUser = firebase.auth().currentUser;
  const mess = {
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    message: message,
    sender: currentUser.uid,
    read: false
  }

  firestoreDB.collection("users")
    .doc(userUid)
    .update({
      messages: firebase.firestore.FieldValue.arrayUnion(mess)
    });
}


export const checkForMessages = () => {
  const currentUser = firebase.auth().currentUser;
  firestoreDB.collection("users").doc(currentUser.uid)
    .onSnapshot(function(doc) {
        if (doc.exists) {
              doc.data().messages.forEach((item, i) => {
                  console.log("-------------" + i + "---------------");
                  console.log("----Sender : " + item.sender);
                  console.log("----Message : " + item.message);
                  console.log("----Date : " + item.date);
              });

        } else {
            console.log("No such document!");
        }
      });
      
}
