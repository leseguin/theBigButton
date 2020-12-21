//Screens/OptionsScreen.js

import React, {useContext, useState, useEffect} from 'react'
import {Button, Text, View, Alert, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import {stylesLib} from './../utils/Utils'

import PersonnalButton from './../Components/PersonnalButton'
import PersonalTextInput from './../Components/PersonalTextInput'

import {firestoreDB} from './../utils/Utils'
import firebase from './../utils/firebase'

import Separator from './../Components/Separator'

//import Button from 'react-native-button'

export default function OptionsScreen() {

  const [pseudo, setPseudo] = useState()

  /**
   * Send when function "applyChanges" send
   */
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

  /**
   * Launch when component did Mount (useEffect function)
   Get the pseudo from the Database
   Set the pseudo
   */
  function getPseudoOfCurrentUser(){
    const currentUser = firebase.auth().currentUser;
    var userRef = firestoreDB.collection("users").doc(currentUser.uid);
    userRef.get().then(function(doc) {
        if (doc.exists) {
            const datadoc = doc.data()
            //console.log("Document data:", datadoc.pseudo);
            setPseudo(datadoc.pseudo)
            //console.log("PSEUDO = " + pseudo)
        } else {
            console.log("No such document!");
            return "Pseudo Introuvable"
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  /**
   * Call when user clicked on "Deconnection" button
      User is disconnected
   */
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
      updatePseudoOfCurrentUser()
  }

  /**
   * Call when OptionsScreen Mount
    call getPseudoOfCurrentUser
   */
  useEffect(() => {
    getPseudoOfCurrentUser()
  }, []);

    return(
      <View style={styles.main_container} >
          <View style={styles.central_form}>
            <PersonalTextInput value={pseudo} placeholder="pseudo" setText={setPseudo} text={pseudo}/>
            <PersonnalButton text='Valider les changements' onPress={applyChanges} buttonSize="small" />
          </View>
          <Separator/>
          <View style={styles.deconnexion_button}>
            <PersonnalButton text='Déconnection' onPress={logOut} buttonSize="x_small" />
          </View>


      </View>
    )
}

const styles = StyleSheet.create({
  main_container:{
    flex:1,
  },
  central_form:{
    flex: 7,
    justifyContent: 'center',
    alignItems:'center'
  },
  deconnexion_button:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: stylesLib.whiteColor
  }

})
