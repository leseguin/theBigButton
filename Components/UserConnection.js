import React, { useState } from 'react'
import {View, Image, StyleSheet, TextInput, Button, Alert, KeyboardAvoidingView} from 'react-native'

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import PersonnalTextInput from './PersonalTextInput'
import BigButton from './BigButton'

import firebase from './../utils/firebase'
import { navigationRef } from './../Navigation/RootNavigation'

import SignInWithFacebook from './../utils/auth.js'
import * as RootNavigation from './../Navigation/RootNavigation'

//A modifier en ajou
function SignInWithFacebookControler(){
  SignInWithFacebook()
  firebase.auth().onAuthStateChanged(function(user) {
    console.log("UserConnection SignInWithFacebookControler user " + user)
  });
}




function UserConnection ({ navigation }) {
  const [text, setText] = useState('');
    return(
      <KeyboardAwareScrollView contentContainerStyle={{flex:1}}>
        <View style={styles.main_container}>
          <View style={styles.image_container}>
            <Image
              style={styles.tiny_logo}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}>
            </Image>
          </View>

          <View style={styles.textinput_container}>
            <PersonnalTextInput placeholder="Donner votre e-mail"/>
            <PersonnalTextInput placeholder="Donner votre mot de passe"/>
          </View>

          <View style={styles.button_container}>
            <Button
              style={styles.button_style}
              title="Se connecter avec Facebook"
              onPress={SignInWithFacebookControler}
            />

            <View style={{height:30}}/>

            <Button
              style={styles.button_style}
              title="Créer un compte"
              onPress={() => navigation.navigate('AccountCreation')}
            />
          </View>

        </View>

      </KeyboardAwareScrollView>
    )
}
export default UserConnection;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems:'center'
  },
  image_container:{
    flex: 2,
    marginTop: 10
  },
  textinput_container:{
    flex: 5,
    alignItems:'center',
    justifyContent:'center'
  },button_container:{
    flex: 3
  },
  tiny_logo: {
    width: 50,
    height: 50
  },
  button_style:{
    padding: 50
  }
})
