import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import EditIcon from 'react-native-vector-icons/Feather';
import Colors from '../../styles/profile/colors';
import { editContainerStyle } from '../../styles/profile';

const titles = ['First Name', 'Last Name', 'Email'];
const dbTitles = ['first_name', 'last_name', 'email'];

const EditAccount = ({ userInput, changeHandler }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>ACCOUNT</Text>
      <View style={styles.details}>
        {titles.map((title, index) => (
          <View key={index}>
            <View style={styles.row}>
              <Text style={styles.item}>{title}</Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.info}
                  value={userInput[dbTitles[index]].toString()}
                  onChangeText={text => changeHandler(text, dbTitles[index])}
                />
                <Text>&nbsp;</Text>
                <EditIcon name='edit-2' size={15} color={Colors.orangePink} />
              </View>
            </View>
            <View style={styles.line} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create(editContainerStyle);

export default EditAccount;
