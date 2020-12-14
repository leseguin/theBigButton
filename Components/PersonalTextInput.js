import React, { useState } from 'react'
import {TextInput, StyleSheet} from 'react-native'


import {stylesLib} from './../utils/Utils'

//Hook d'état
//<TextInput style={styles.text_input} {...props}  onChangeText={text => setText(text)}/>
function CreationTextInput(props){
  //const [text, setText] = useState('');
  const text = props.text;
  const setText = props.setText;

  return(
    <TextInput style={styles.text_input} {...props}  onChangeText={text => setText(text)}/>
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
  }
})
