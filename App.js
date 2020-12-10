import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import BigButton from './Components/BigButton'
import Navigation from './Navigation/Navigation'

// Set an initializing state whilst Firebase connects
 //const [initializing, setInitializing] = useState(true);
 //const [user, setUser] = useState();

export default function App() {


  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
