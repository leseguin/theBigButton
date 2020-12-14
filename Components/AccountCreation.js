//Components/AccountCreation.js

import React, { useState } from 'react'
import {View, Image, StyleSheet, TextInput, Button, Alert, Text, TouchableOpacity} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import PersonnalTextInput from './PersonalTextInput'
import PersonnalButton from './PersonnalButton'
import Separator from './Separator'
import {CreateUserWithEmailAndPassword} from './../utils/auth.js'






function AccountCreation(){



 const [pseudo, setPseudo] = useState();
 const [email, setEmail] = useState();
 const [password, setPassword] = useState();

 const  validateAccountCreation = () => {
   console.log("_validateAccountCreation EMAIL " + email)
   console.log("_validateAccountCreation PASSWORD " + password);
   CreateUserWithEmailAndPassword(email, password)
 }



  return(
    <KeyboardAwareScrollView contentContainerStyle={{flex:1}}>
      <View style={{flex: 2}}/>
      <View style={styles.main_container}>

          <View>
            <Text> Donner un pseudo </Text>
            <PersonnalTextInput setText={setPseudo} text={pseudo} placeholder="Pseudo"/>
          </View>

          <View>
            <Text> Donner un e-mail </Text>
            <PersonnalTextInput setText={setEmail} text={email}  placeholder="E-mail"/>
          </View>

          <View>
            <Text> Donner un mot de passe </Text>
            <PersonnalTextInput setText={setPassword} text={password} secureTextEntry={true} placeholder="Mot de passe"/>
          </View>

          <PersonnalButton buttonStyle="small" text="Valider" onPress={validateAccountCreation}/>

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
