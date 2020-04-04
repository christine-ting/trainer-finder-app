import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Colors from './constants/Colors';
import Icon from 'react-native-vector-icons/Feather';


const EditAccount = ({ profile }) => {
  const [firstName, editFirstName] = React.useState(profile.first_name);
  const [lastName, editLastName] = React.useState(profile.last_name);
  const [email, editEmail] = React.useState(profile.email);

  return (
    <View style={styles.editAccount}>
      <Text style={styles.title}>ACCOUNT</Text>
      <View style={styles.details}>
        <View style={styles.row}>
          <Text style={styles.item}>First Name</Text>
          <View style={styles.inputView}>
            <TextInput style={styles.info} value={firstName} onChangeText={text => editFirstName(text)}/>
            <Text>&nbsp;</Text>
            <Icon name="edit-2" size={15} color={Colors.mediumGrey} />
          </View>
        </View>
        <View style={styles.line}/>
        <View style={styles.row}>
          <Text style={styles.item}>Last Name</Text>
          <View style={styles.inputView}>
            <TextInput style={styles.info} value={lastName} onChangeText={text => editLastName(text)}/>
            <Text>&nbsp;</Text>
            <Icon name="edit-2" size={15} color={Colors.mediumGrey} />
          </View>
        </View>
          <View style={styles.line}/>
          <View style={styles.row}>
          <Text style={styles.item}>Email</Text>
          <View style={styles.inputView}>
            <TextInput style={styles.info} value={email} onChangeText={text => editEmail(text)}/>
            <Text>&nbsp;</Text>
            <Icon name="edit-2" size={15} color={Colors.mediumGrey} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  editAccount: {
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
export default EditAccount;