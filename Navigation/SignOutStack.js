// Navigation/SignOutStack.js

import React, { useState, useEffect, createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './RootNavigation'


import firebase from './../utils/firebase'

import UserConnectionScreen from '../Screens/UserConnectionScreen'
import AccountCreationScreen from '../Screens/AccountCreationScreen'

const Stack = createStackNavigator();

export default function SignOutStack(){

  return(
    <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
          <>
            <Stack.Screen name="UserConnection" component={UserConnectionScreen} options={{ title: 'Connexion' }}/>
            <Stack.Screen name="AccountCreation" component={AccountCreationScreen} options={{ title: 'Création de compte' }}/>
          </>
          </Stack.Navigator>
    </NavigationContainer>
  )
}
