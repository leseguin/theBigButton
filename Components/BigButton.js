//components/BigButton.js

import React from 'react'
import {Button, Text, View, Alert, StyleSheet } from 'react-native'
//import Button from 'react-native-button'

export default class BigButton extends React.Component {

  onButtonPressed(){
    Alert.alert('Button pressed')
  }

  render(){
    return(
      <View style={styles.main_container} >
        <View style={styles.header}>
          <Button style={styles.header_button} mode="contained" title="déconnection" accessibilityLabel='déconnection'/>
        </View>
        <View style={styles.central}>
          <Button style={styles.button}
            title="Press me"
            onPress={this.onButtonPressed }
          />
        </View>
      </View>
    )
  }
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
