//Screens/BigButton.js

import React from 'react'
import {Button, Text, View, Alert, StyleSheet, ActivityIndicator } from 'react-native'
import {stylesLib} from './../utils/Utils'
//import Button from 'react-native-button'

export default class BigButton extends React.Component {

  render(){
    return(
      <View style={styles.main_container} >
          <Text style={styles.text}>Tire mon doigt</Text>
          <ActivityIndicator size="large" color={stylesLib.mainThemeColor}  />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  text:{
    color: stylesLib.mainThemeColor,
    fontSize: 30,
    textTransform:'uppercase',
    fontWeight:'bold',
    textAlign: 'center',
    paddingBottom : 50
  }

})
