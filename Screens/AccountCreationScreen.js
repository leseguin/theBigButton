//Components/AccountCreation.js

import React, { useState } from 'react'
import {View, Image, StyleSheet, TextInput, Button, Alert, Text, TouchableOpacity} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import PersonnalTextInput from './../Components/PersonalTextInput'
import PersonnalButton from './../Components/PersonnalButton'
import {CreateUserWithEmailAndPassword} from './../utils/auth.js'






function AccountCreationScreen(){



 const [pseudo, setPseudo] = useState();
 const [email, setEmail] = useState();
 const [password, setPassword] = useState();

 const  validateAccountCreation = () => {
   console.log("_validateAccountCreation EMAIL " + email)
   console.log("_validateAccountCreation PASSWORD " + password);
   CreateUserWithEmailAndPassword(email, password, pseudo)
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

export default AccountCreationScreen
