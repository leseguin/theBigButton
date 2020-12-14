import React, { useState } from 'react'
import {View, Image, StyleSheet, Text, TextInput, Button, Alert, KeyboardAvoidingView, TouchableOpacity} from 'react-native'

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import PersonnalTextInput from './PersonalTextInput'
import PersonnalButton from './PersonnalButton'
import BigButton from './BigButton'

import firebase from './../utils/firebase'
import { navigationRef } from './../Navigation/RootNavigation'

import {SignInWithFacebook, SignInWithEmailAndPassword} from './../utils/auth.js'
import * as RootNavigation from './../Navigation/RootNavigation'

import {stylesLib} from './../utils/Utils'

function SignInWithFacebookControler(){
  SignInWithFacebook()
  firebase.auth().onAuthStateChanged(function(user) {
    console.log("UserConnection SignInWithFacebookControler user " + user)
  });
}






function UserConnection ({ navigation }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  function SignInWithEmailAndPasswordControler(){
    SignInWithEmailAndPassword(email, password)
    firebase.auth().onAuthStateChanged(function(user) {
      console.log("UserConnection SignInWithFacebookControler user " + user)
    });
  }

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
            <PersonnalTextInput setText={setEmail} text={email} placeholder="Donner votre e-mail"/>
            <PersonnalTextInput setText={setPassword} text={password} secureTextEntry={true} placeholder="Donner votre mot de passe"/>
          </View>

          <View style={styles.buttons_container}>
            <PersonnalButton buttonSize="small" text="Se connecter" onPress={SignInWithEmailAndPasswordControler}/>
            <View style={{height:15}}/>
            <PersonnalButton buttonSize="small" text="Se connecter avec Facebook" onPress={SignInWithFacebookControler}/>
            <View style={{height:15}}/>
            <PersonnalButton buttonSize="x_small" text="Créer un compte" onPress={() => navigation.navigate('AccountCreation')}/>
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
       borderRadius: 30,
       width: 200,
       height: 60,
       padding: 10,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: stylesLib.mainThemeColor
  },
  button_text:{
      color: '#ffe2ff',
      fontSize: 14,
      textAlign: 'center'
    },
  buttons_container:{
    flex:6,
    alignItems:'center',
    justifyContent:'center'
  }
})
