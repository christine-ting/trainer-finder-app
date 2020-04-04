import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Colors from './constants/Colors';
import Icon from 'react-native-vector-icons/Feather';

const EditPersonalDetails = ({ profile }) => {
  const titles = ['Height', 'Weight', 'Age', 'Gender', 'Date of Birth', 'Zip Code'];
  const dbTitles = ['height', 'weight', 'age', 'gender', 'dateOfBirth', 'zip'];
  const editEntry = (text, title)=> {
    console.log(text, title)
  }

  return (
    <View style={styles.editPersonalDetails}>
      <Text style={styles.title}>PERSONAL DETAILS</Text>
      <View style={styles.details}>
        { titles.map((title, index) => (
          <View>
            <View style={styles.row}>
              <Text style={styles.item}>{title}</Text>
              <View style={styles.inputView}>
                <TextInput style={styles.info} value={profile[dbTitles[index]]} onChangeText={text => editEntry(text, dbTitles[index])}/>
                <Text>&nbsp;</Text>
                <Icon name="edit-2" size={15} color={Colors.mediumGrey} />
              </View>
            </View>
            <View style={styles.line}/>
          </View>
        )) }

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  editPersonalDetails: {
    width: '100%'
  },
  title: {
    color: Colors.mediumGrey,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 15
  },
  details: {
    backgroundColor: Colors.sectionBackground
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1
  },
  item: {
    color: Colors.lightGrey,
    justifyContent: 'center',
    // backgroundColor: 'blue',
    flex: 0.3
  },
  inputView: {
    flexDirection: 'row',
    // backgroundColor: 'white',
    flex: 0.7,
    justifyContent: 'flex-end'
  },  
  info: {
    color: Colors.mediumGrey
  },
  line: {
    backgroundColor: Colors.background,
    height: 1
  }
})

export default EditPersonalDetails;