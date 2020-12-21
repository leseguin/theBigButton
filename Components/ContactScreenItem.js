//Components/ContactScreenItem.js

import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'

import {stylesLib} from './../utils/Utils'



function ContactScreenItem(props) {
  const contact = props.contact;

  //Un item de contact avec
  // pseudo
  // Profif picture later ?
  //Bouton supprimer
  //Bouton Envoyer un message


//Changer les boutons pour envoyer un message et supprimer en swipe
//Pourquoi style non appliqué à Supprimer ?
  return(
    <View style={styles.main_container}>
      <Text style={styles.text_pseudo}> {contact.pseudo} </Text>
      <View style={styles.buttons_container}>
        <TouchableOpacity style={styles.button} onPress={props.onPress} >
          <Text style={styles.button_text}>Contacter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.onPress} >
          <Text style={styles.button_text, {color: stylesLib.redColor, fontWeight : 'bold' }}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container : {
    flex: 1,
    flexDirection: "row",
    borderColor: stylesLib.greyColor,
    backgroundColor:stylesLib.whiteColor,
    borderWidth: 1,
    paddingRight: 10,
    paddingLeft:10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttons_container: {
    flex: 2,
    flexDirection: "column",
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text_pseudo : {
    flex : 1,
    color: stylesLib.mainThemeColor,
    fontSize: 17,
    paddingLeft:15,
    fontWeight : 'bold'
  },
  button : {
    marginTop:3,
    marginBottom: 3
  },
  button_text: {
    fontSize: 12,
    paddingLeft:15,
    fontWeight : 'bold'
  }
})

export default ContactScreenItem
