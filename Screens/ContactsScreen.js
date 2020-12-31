//Screens/ContactsScreen.js

import React, {useState} from 'react'
import {View, Text, StyleSheet, Alert, FlatList, Modal} from 'react-native'

import ContactScreenItem from './../Components/ContactScreenItem'
import PersonnalButton from './../Components/PersonnalButton'
import Separator from './../Components/Separator'

import {stylesLib} from './../utils/Utils'
import GetUserUidWithPseudo from './../utils/DatabaseManager'
import ModalAddContact from './../Components/ModalAddContact'


export default function ContactsScreen(props) {


  function onPress(){
    Alert.alert("Je suis touché")
  }





  // TODO: recuperer la liste des contact a part de la DB
  const items = [
    {pseudo :"pseudo1", id:1},
    {pseudo :"pseudo2", id:2},
    {pseudo :"pseudo3", id:3},
    {pseudo :"pseudo1", id:4},
    {pseudo :"pseudo2", id:5},
    {pseudo :"pseudo3", id:12},
    {pseudo :"pseudo1", id:6},
    {pseudo :"pseudo2", id:7},
    {pseudo :"pseudo3", id:8},
    {pseudo :"pseudo1", id:9},
    {pseudo :"pseudo2", id:10},
    {pseudo :"pseudo3", id:11}
  ]

  function deleteItem(id) {

  }

  const [modalVisible, setModalVisible] = useState(false);

  function addContact(){
      setModalVisible(true)
  }




  //Une liste de contact DONE
  //Bouton d'ajout de contact en bas ?
  return (
    <View style={styles.main_container}>

      <ModalAddContact closeModal={() => {setModalVisible(!modalVisible)}} modalVisible={modalVisible} />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <ContactScreenItem onPress={onPress} contact={item}/>}
      />
      <Separator/>
      <View style={styles.buttons_container}>
        <PersonnalButton buttonSize="small" text="Ajouter un contact"  onPress={addContact}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  main_container : {
    flex: 1
  },
  buttons_container : {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: stylesLib.whiteColor
  }
})
