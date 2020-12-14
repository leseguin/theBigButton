import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

import {stylesLib} from './../utils/Utils'

export default function PersonnalButton(props) {

  var buttonSize = props.buttonSize
  var buttonStyle;
  var textButtonStyle
  switch (buttonSize) {
    case "large":
      buttonStyle = styles.large_button
      textButtonStyle = styles.large_button_text
      break;
    case "medium":
    buttonStyle = styles.medium_button
    textButtonStyle = styles.medium_button_text
      break;
    case "x_small":
    buttonStyle = styles.x_small_button
    textButtonStyle = styles.x_small_button_text
      break;
    default:
    buttonStyle = styles.small_button
    textButtonStyle = styles.small_button_text
  }


  return(
    <TouchableOpacity style={buttonStyle}
      onPress={props.onPress}
      accessibilityLabel={props.text}>
      <Text style={textButtonStyle}>{props.text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  large_button_text:{
    color: stylesLib.mainTextColor,
    fontSize: 24,
    textTransform:'uppercase',
    fontWeight:'bold',
    textAlign: 'center',
    padding : 5
  },
  medium_button_text:{
    color: stylesLib.mainTextColor,
    fontSize: 18,
    textTransform:'uppercase',
    fontWeight:'bold',
    textAlign: 'center',
    padding: 10
  },
  small_button_text:{
    color: stylesLib.mainTextColor,
    fontSize: 13,
    fontWeight:'bold',
    textAlign: 'center',
    padding: 25
  },
  x_small_button_text:{
    color: stylesLib.mainTextColor,
    fontSize: 10,
    textAlign: 'center',
    padding : 5,
    fontWeight : 'bold'
  },
  large_button:{
    flexDirection: 'row',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: stylesLib.mainThemeColor,
    marginTop: 10,
    marginBottom: 10,
    width: 200,
    height: 160
  },
  medium_button : {
    flexDirection: 'row',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: stylesLib.mainThemeColor,
    marginTop: 10,
    marginBottom: 10,
    width: 180,
    height: 80,
  },
  small_button : {
    flexDirection: 'row',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: stylesLib.mainThemeColor,
    marginTop: 10,
    marginBottom: 10,
    width: 260,
    height: 45,
  },
  x_small_button : {
    flexDirection: 'row',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: stylesLib.mainThemeColor,
    marginTop: 10,
    marginBottom: 10,
    width: 130,
    height: 20
  }
})
