//components/BigButton.js

import React, {useContext} from 'react'
import {Button, Text, View, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { AuthContext } from '../Navigation/Navigation'
import firebase from './../utils/firebase'
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
          <TouchableOpacity style={styles.header_button} onPress={logOut} accessibilityLabel='déconnection'>
            <Text style={styles.header_button_text}>Déconnection</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.central}>
          <TouchableOpacity style={styles.central_button}
            title="Press me"
            onPress={onButtonPressed}>
            <Text style={styles.central_button_text}>Envoyer</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  main_container:{
    flex:1,
  },
  central_button:{
     flexDirection: 'row',
     borderRadius: 30,
     marginTop: 10,
     marginBottom: 10,
     width: 160,
     height: 60,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#6AE2E8'
  },
  central_button_text:{
    color: '#ffe2ff',
    fontSize: 24,
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
     backgroundColor: '#6AE2E8'
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
