// Navigation/Navigation.js

//import {createAppContainer} from 'react-navigation'
import React, { useState, useEffect, createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './RootNavigation'

import {checkForMessages} from './../utils/MessagesManager'


import firebase from './../utils/firebase'

import SignInStack from './SignInStack'
import SignOutStack from './SignOutStack'
import SplashScreen from '../Screens/SplashScreen'

const Stack = createStackNavigator();

 //initialRouteName="UserConnection">
export const AuthContext = createContext(null)


function Navigation () {

  const [initializing, setInitializing] = useState(true)
  var [user, setUser] = useState(null)

  function onAuthStateChanged(result) {
    setUser(result)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const authSubscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)

    // unsubscribe on unmount
    return authSubscriber
  }, [])


  if (!initializing) {
    checkForMessages();
    console.log("je checke pour messages");
  }


  if (initializing) {
    // We haven't finished checking for the token yet
    return <SplashScreen/>;
  } 

  return user ? (
    <AuthContext.Provider value={user}>
      <SignInStack />
    </AuthContext.Provider>
  ) : (
    <SignOutStack />
  )
}

export default Navigation
