//components/BigButton.js

import React, {useContext} from 'react'
import {Button, Text, View, Alert, StyleSheet } from 'react-native'
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
          <Button style={styles.header_button} onPress={logOut} mode="contained" title="déconnection" accessibilityLabel='déconnection'/>
        </View>
        <View style={styles.central}>
          <Button style={styles.button}
            title="Press me"
            onPress={onButtonPressed }
          />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  main_container:{
    flex:1,
  },
  button:{
    height:50,
    width:50
  },
  header:{
    flex: 2,
    justifyContent: 'flex-end',
    alignItems:'flex-end'
  },
  header_button:{
    fontSize: 50
  },
  central:{
    flex:30,
    justifyContent: 'center',
    alignItems:'center'
  }

})
