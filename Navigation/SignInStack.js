

import React, { useState, useEffect, createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './RootNavigation'

import BigButtonScreen from '../Screens/BigButtonScreen'

const Stack = createStackNavigator();

export default function SignInStack(){

    return(
      <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
          <>
            <Stack.Screen name="BigButton" component={BigButtonScreen} options={{ title: 'Le gros bouton' }}/>
          </>
          </Stack.Navigator>
      </NavigationContainer>
    )
}
