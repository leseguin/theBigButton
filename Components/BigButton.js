//components/BigButton.js

import React, {useContext} from 'react'
import {Button, Text, View, Alert, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import { AuthContext } from '../Navigation/Navigation'
import firebase from './../utils/firebase'
import {stylesLib} from './../utils/Utils'

import PersonnalButton from './PersonnalButton'

//import Button from 'react-native-button'




export default function BigButton() {


  const user = useContext(AuthContext)

  async function logOut() {
    try {
      await firebase.auth().signOut()
    } catch (e) {
      console.error(e)
    }
  }

  function onButtonPressed(){
    Alert.alert('Button pressed')
  }

    return(
      <View style={styles.main_container} >
        <View style={styles.header}>
            <PersonnalButton text='Déconnection' onPress={logOut} buttonSize="x_small" />
        </View>
        <View style={styles.central}>
          <PersonnalButton text='Envoyer' onPress={onButtonPressed} buttonSize="large" />
          <PersonnalButton text='Envoyer' onPress={onButtonPressed} buttonSize="medium" />
          <PersonnalButton text='Envoyer' onPress={onButtonPressed} buttonSize="small" />
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
