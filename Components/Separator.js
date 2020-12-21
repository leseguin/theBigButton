//Components/Separator.js

import React from 'react'
import {View, StyleSheet} from 'react-native'
import {stylesLib} from './../utils/Utils'


export default function Separator(){

  return(
    <View style={styles.main_container}>
    <View style={styles.view_style}/>
    </View>
  )
}

const styles= StyleSheet.create({
  main_container: {
    flexDirection: "row"
  },
  view_style: {
    flex:1,
    borderColor: stylesLib.mainThemeColor,
    borderWidth: 1,
  }
})
