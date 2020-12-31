//Components/ModalAddContact.js

import React, {useState} from 'react'
import {StyleSheet, Text, Modal, View, Alert} from 'react-native'

import {NO_SUCH_DOCUMENT, ERROR_GETTING_DOCUMENT} from './../utils/Errors.js'

import PersonnalButton from './PersonnalButton.js'
import PersonalTextInput from './PersonalTextInput.js'
import Separator from './Separator'
import {stylesLib} from './../utils/Utils'
import GetUserUidWithPseudo from './../utils/DatabaseManager.js'


export default function ModalAddContact(props){
  const [Username, setUsername] = useState() 


  //Todo rechercher le contact 
  // Erreur s'il existe pas -> pop-up
  // Si oui, ajout de UID dans la liste de contacts
  function _searchContact() {
    const contactUID = GetUserUidWithPseudo(Username)
    switch (contactUID) {
      case NO_SUCH_DOCUMENT:
        //popUp erreur
        Alert.alert("Désolé, contact introuvable.")
        break;
      case ERROR_GETTING_DOCUMENT:
        //PopUpErreur
        Alert.alert("Erreur de connexion à la base de données. Veuillez réessayer ultérieurement.")
        break;
      default:
        //Ajout dans list d'amis, 
        //popUp reussite
        Alert.alert("Ajouté aux contacts.")
        break;
    }
  }

  return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
    >
      <View style={styles.main_container}>
        <Separator/>
        <PersonalTextInput placeholder="Donner le pseudonyme" text={Username} setText={setUsername} />
        <Separator/>
        <PersonnalButton onPress={_searchContact} text="Rechercher" buttonSize="small"/>
        <PersonnalButton onPress={props.closeModal} text="Annuler" buttonSize="small"/>
        <Separator/>
      </View>
  </Modal>
  )
}

const styles = StyleSheet.create({
  main_container:{
    flex:1,
    backgroundColor: stylesLib.mainTextColor,
  }
})
