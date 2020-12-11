

import React, { useState, useEffect, createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './RootNavigation'


import firebase from './../utils/firebase'

import BigButton from '../Components/BigButton'
import UserConnection from '../Components/UserConnection'
import AccountCreation from '../Components/AccountCreation'
import SplashScreen from '../Components/SplashScreen'

const Stack = createStackNavigator();

export default function SignOutStack(){

  return(
    <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
          <>
            <Stack.Screen name="UserConnection" component={UserConnection} options={{ title: 'Connexion' }}/>
            <Stack.Screen name="AccountCreation" component={AccountCreation} options={{ title: 'Création de compte' }}/>
          </>
          </Stack.Navigator>
    </NavigationContainer>
  )
}
