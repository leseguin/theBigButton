// Navigation/Navigation.js

//import {createAppContainer} from 'react-navigation'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './RootNavigation'


import firebase from './../utils/firebase'

import BigButton from '../Components/BigButton'
import UserConnection from '../Components/UserConnection'
import AccountCreation from '../Components/AccountCreation'

const Stack = createStackNavigator();

 //initialRouteName="UserConnection">
 //

function Navigation () {
  const [user, setUser] = useState(0);

  useEffect(() => {
    var firebaseUSer = firebase.auth().currentUser
    console.log("Navigation UseEffect " + firebaseUSer)
    setUser(firebaseUSer)
  });

  console.log("USER " + user)
  return(
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
      {user ? (
        <>
        <Stack.Screen name="UserConnection" component={UserConnection} options={{ title: 'Connexion' }}/>
        <Stack.Screen name="AccountCreation" component={AccountCreation} options={{ title: 'Création de compte' }}/>
        </>
      ) : (
        <>
        <Stack.Screen name="BigButton" component={BigButton} options={{ title: 'Le gros bouton' }}/>
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
)
}

export default Navigation
