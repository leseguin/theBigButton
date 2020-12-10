import React, { useState } from 'react'
import {TextInput, StyleSheet} from 'react-native'

//Hook d'état
function CreationTextInput(props){
  const [text, setText] = useState('');
  return(
    <TextInput style={styles.text_input} {...props}  onChangeText={text => setText(text)}/>
  )
}

export default CreationTextInput


const styles = StyleSheet.create({
  text_input:{
    borderColor: '#000000',
    borderWidth: 1,
    padding: 5,
    width: 250,
    margin: 5
  }
})
