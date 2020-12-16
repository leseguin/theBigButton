// Navigation/SignInStack.js

import React, { useState, useEffect, createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './RootNavigation'

import BigButtonScreen from '../Screens/BigButtonScreen'
import OptionsScreen from '../Screens/OptionsScreen'

const Stack = createStackNavigator();

export default function SignInStack(){

    return(
      <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="BigButton">
          <>
            <Stack.Screen name="BigButton" component={BigButtonScreen} options={{ title: 'Le gros bouton' }}/>
            <Stack.Screen name="OptionsScreen" component={OptionsScreen} options={{ title: 'Options' }}/>
          </>
          </Stack.Navigator>
      </NavigationContainer>
    )
}

//
