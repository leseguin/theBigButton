//Components/AccountCreation.js

import React, { useState } from 'react'
import {View, Image, StyleSheet, TextInput, Button, Alert, Text} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import PersonnalTextInput from './PersonalTextInput'
import Separator from './Separator'


function _validateAccountCreation(){
  Alert.alert('Button _validateAccountCreation pressed');
}


function AccountCreation(){
  return(
    <KeyboardAwareScrollView contentContainerStyle={{flex:1}}>
      <View style={{flex: 2}}/>
      <View style={styles.main_container}>

          <View>
            <Text> Donner un pseudo </Text>
            <PersonnalTextInput placeholder="Pseudo"/>
          </View>

          <View>
            <Text> Donner un e-mail </Text>
            <PersonnalTextInput placeholder="E-mail"/>
          </View>

          <View>
            <Text> Donner un mot de passe </Text>
            <PersonnalTextInput placeholder="Mot de passe"/>
          </View>

          <Button title="Valider" onPress={_validateAccountCreation}/>

      </View>

      <View style={{flex: 2}}/>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  main_container:{
    flex: 2,
    //justifyContent: 'center',
    alignItems:'center'
  }
})

export default AccountCreation
