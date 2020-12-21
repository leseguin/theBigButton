//Screens/BigButton.js


import React, {useContext, useState, useEffect} from 'react'
import {Button, Text, View, Alert, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import { AuthContext } from '../Navigation/Navigation'
import firebase from './../utils/firebase'
import {stylesLib} from './../utils/Utils'
import {GetAllUsersUid, GetUserUidWithPseudo} from './../utils/DatabaseManager'
import {sendMessageTo} from './../utils/MessagesManager'

import * as RootNavigation from './../Navigation/RootNavigation'

import PersonnalButton from './../Components/PersonnalButton'
import PersonalTextInput from './../Components/PersonalTextInput'

//import Button from 'react-native-button'




export default function onButtonPressed({navigation}) {
  const user = useContext(AuthContext)
    const [message, setMessage] = useState()

  // TODO: Verifier si le message n'est pas vide
  async function onButtonPressed(){

      sendMessageTo(message, "qQHrtsjSzEgEIkILJyMP2MXq8bV2")
  }


    return(
      <View style={styles.main_container} >
        <View style={styles.header}>
            <PersonnalButton text='Options' onPress={() => navigation.navigate("OptionsScreen")} buttonSize="x_small" />
        </View>
        <View style={styles.central}>
          <PersonalTextInput placeholder="message à envoyer" setText={setMessage} text={message}/>
          <PersonnalButton text='Envoyer' onPress={onButtonPressed} buttonSize="large" />
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
    alignItems:'flex-end',
    paddingTop:1,
    paddingRight: 5
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
  header_button_text:{
    color: '#ffe2ff',
    fontSize: 14,
  },
  central:{
    flex:30,
    justifyContent: 'center',
    alignItems:'center'
  }

})
