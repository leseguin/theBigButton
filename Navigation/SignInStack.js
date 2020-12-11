

import React, { useState, useEffect, createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './RootNavigation'

import BigButton from '../Components/BigButton'
import UserConnection from '../Components/UserConnection'
import AccountCreation from '../Components/AccountCreation'
import SplashScreen from '../Components/SplashScreen'

const Stack = createStackNavigator();

export default function SignInStack(){

    return(
      <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
          <>
            <Stack.Screen name="BigButton" component={BigButton} options={{ title: 'Le gros bouton' }}/>
          </>
          </Stack.Navigator>
      </NavigationContainer>
    )
}
