//Screen/OptionsScreen.js

import React, {useContext, useState, useEffect} from 'react'
import {Button, Text, View, Alert, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import {stylesLib} from './../utils/Utils'

import PersonnalButton from './../Components/PersonnalButton'
import PersonalTextInput from './../Components/PersonalTextInput'

import {firestoreDB} from './../utils/Utils'
import firebase from './../utils/firebase'

//import Button from 'react-native-button'

export default function OptionsScreen() {

  const [pseudo, setPseudo] = useState()

  async function logOut() {
    try {
      await firebase.auth().signOut()
    } catch (e) {
      console.error(e)
    }
  }

  //Ajouter verification des champs
  //Verifier sur pseudo existe dans la BD
  function applyChanges(){
    if(pseudo.lenght >= 4){
      updatePseudoOfCurrentUser()
    } else {
      Alert.alert("Pseudo trop court (inferieurs a 4 caractères)")
    }
  }

  useEffect(() => {
    getPseudoOfCurrentUser()
  }, []);

  function updatePseudoOfCurrentUser(){
    const currentUser = firebase.auth().currentUser;
    var userRef = firestoreDB.collection("users").doc(currentUser.uid);
    userRef.get().then(function(doc) {
        if (doc.exists) {
            firestoreDB.collection("users").doc(currentUser.uid).update({
              "pseudo": pseudo
            }).then(function() {
            console.log("Document successfully updated!");});
        } else {
            console.log("No such document!");
            return "Pseudo Introuvable"
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  function getPseudoOfCurrentUser(){
    const currentUser = firebase.auth().currentUser;
    var userRef = firestoreDB.collection("users").doc(currentUser.uid);
    userRef.get().then(function(doc) {
        if (doc.exists) {
            const datadoc = doc.data()
            console.log("Document data:", datadoc.pseudo);
            setPseudo(datadoc.pseudo)
            console.log("PSEUDO = " + pseudo)
        } else {
            console.log("No such document!");
            return "Pseudo Introuvable"
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

    return(
      <View style={styles.main_container} >
        <View style={styles.central}>
          <View style={styles.central_form}>
            <PersonalTextInput value={pseudo} placeholder="pseudo" setText={setPseudo} text={pseudo}/>
            <PersonnalButton text='Valider les changements' onPress={applyChanges} buttonSize="small" />
          </View>

          <PersonnalButton text='Déconnection' onPress={logOut} buttonSize="x_small" />

        </View>

      </View>
    )
}

const styles = StyleSheet.create({
  main_container:{
    flex:1,
  },
  header:{
    flex: 2,
    justifyContent: 'flex-end',
    alignItems:'flex-end'
  },
  header_button:{
    flexDirection: 'row',
     borderRadius: 30,
     padding: 5,
     marginRight:5,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: stylesLib.mainThemeColor
  },
  central:{
    flex:30,
    justifyContent: 'center',
    alignItems:'center'
  },
  TextInputDescription: {
    color: stylesLib.mainThemeColor,
    fontSize: 12
  },
  central_form:{
    justifyContent: 'center',
    alignItems:'center'
  }

})
