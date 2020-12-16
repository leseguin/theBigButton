//Components/PersonalTextInput.js
import React, { useState } from 'react'
import {TextInput, StyleSheet, View, Text} from 'react-native'


import {stylesLib} from './../utils/Utils'

//Hook d'état
//<TextInput style={styles.text_input} {...props}  onChangeText={text => setText(text)}/>
function CreationTextInput(props){
  const text = props.text;
  const setText = props.setText;

  return(
    <View>
      <Text style={styles.TextInputDescription}>{props.placeholder}</Text>
      <TextInput style={styles.text_input} {...props}  onChangeText={text => setText(text)}/>
    </View>
  )
}

export default CreationTextInput


const styles = StyleSheet.create({
  text_input:{
    borderColor: stylesLib.mainThemeColor,
    borderWidth: 2,
    paddingRight: 10,
    paddingLeft:10,
    paddingTop: 5,
    paddingBottom: 5,
    width: 250,
    borderRadius: 10,
    margin: 5
  },
  TextInputDescription: {
    color: stylesLib.mainThemeColor,
    fontSize: 12,
    paddingLeft:15
  },
})
