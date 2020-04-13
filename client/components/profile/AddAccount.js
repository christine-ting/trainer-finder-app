import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Colors from '../../styles/profile/colors';
import { addAccountStyle } from '../../styles/profile';
import Icon from 'react-native-vector-icons/Ionicons';
import SolidCircle from 'react-native-vector-icons/FontAwesome';
import VoidCircle from 'react-native-vector-icons/FontAwesome';

const steps = [...Array(4).keys()];
let profile;

const AddAccount = ({ navigation }) => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');

  const changeHandler = (text, type) => {
    if (type === 'firstName') {
      setFirstName(text);
    }
    if (type === 'lastName') {
      setLastName(text);
    }
  };

  const nextClickHandler = () => {
    profile = {
      first_name,
      last_name
    };
    navigation.navigate({
      routeName: 'PersonalDetails',
      params: {
        profile
      }
    });
  };

  return (
    <View style={styles.addAccount}>
      <View style={styles.steps}>
        {steps.map((step, index) =>
          index === 0 ? (
            <SolidCircle
              name='circle'
              size={10}
              style={{ color: Colors.orangePink }}
              key={index}
            />
          ) : (
            <VoidCircle
              name='circle-o'
              size={10}
              style={{ color: Colors.mediumGrey, paddingLeft: 5 }}
              key={index}
            />
          )
        )}
      </View>
      <View style={styles.addAccountBox}>
        <View style={styles.rowView}>
          <Text style={styles.addText}>First Name: </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.addInfoInput}
              onChangeText={text => changeHandler(text, 'firstName')}
            />
          </View>
        </View>
        <View style={styles.rowView}>
          <Text style={styles.addText}>Last Name: </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.addInfoInput}
              onChangeText={text => changeHandler(text, 'lastName')}
            />
          </View>
        </View>
      </View>
      <View style={styles.nextView}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => nextClickHandler()}
        >
          <Text style={{ color: Colors.orangePink }}>Next&nbsp;</Text>
          <Icon
            name='ios-arrow-forward'
            size={15}
            style={{ color: Colors.orangePink, marginTop: 1 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

AddAccount.navigationOptions = {
  headerTitle: 'Add Account',
  headerStyle: {
    backgroundColor: Colors.headerFooter,
    shadowColor: 'transparent'
  },
  headerTintColor: Colors.lightGrey,
  headerTitleStyle: {
    fontSize: 20
  }
};

const styles = StyleSheet.create(addAccountStyle);

export default AddAccount;
