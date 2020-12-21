// Navigation/SignInStack.js

import React, { useState, useEffect, createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './RootNavigation'

import BigButtonScreen from '../Screens/BigButtonScreen'
import OptionsScreen from '../Screens/OptionsScreen'
import SplashScreen from '../Screens/SplashScreen'
import ContactsScreen from '../Screens/ContactsScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

export default function SignInStack(){




  function Connected() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>
        <Tab.Screen name="BigButton" component={BigButtonScreen} options={{ title: 'Le gros bouton' }}/>
        <Tab.Screen name="ContactsScreen" component={ContactsScreen} options={{ title: 'Contacts' }}/>
        <Tab.Screen name="OptionsScreen" component={OptionsScreen} options={{ title: 'Options' }}/>
      </Tab.Navigator>
    );
  }

    return(
      <NavigationContainer ref={navigationRef}>
          <Stack.Navigator >
          <>
            <Stack.Screen name="Connected" component={Connected} />

          </>
          </Stack.Navigator>
      </NavigationContainer>
    )
}

//
