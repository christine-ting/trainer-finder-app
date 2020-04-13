import React, { useReducer } from 'react';
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
import ArrowIcon from 'react-native-vector-icons/Octicons';
import { pickerStyle } from '../../styles/profile/common';
import RNPickerSelect from 'react-native-picker-select';

const steps = [...Array(4).keys()];
const titles = [
  'Height',
  'Weight',
  'Age',
  'Gender',
  'Date of Birth',
  'Zip Code'
];
const dbTitles = ['height', 'weight', 'age', 'gender', 'date_of_birth', 'zip'];

const AddPersonalDetails = ({ navigation }) => {
  let prevProfile = navigation.getParam('profile');
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      height: '0ft0in',
      weight: '0 lbs',
      age: 0,
      gender: '',
      date_of_birth: '1/1/2000',
      zip: 12345
    }
  );

  const changeHandler = (text, title) => {
    console.log(title, text)
    setUserInput({ [title]: text });
  };

  const nextClickHandler = () => {
    const profile = {...prevProfile, ...userInput};
    navigation.navigate({
      routeName: 'FitnessGoals',
      params: {
        profile
      }
    });
  };

  return (
    <View style={styles.addAccount}>
      <View style={styles.steps}>
        {steps.map((step, index) =>
          index === 1 ? (
            <SolidCircle
              name="circle"
              size={11}
              style={{ color: Colors.orangePink, paddingLeft: 5 }}
              key={index}
            />
          ) : (
            <VoidCircle
              name="circle-o"
              size={10}
              style={{ color: Colors.mediumGrey, paddingLeft: 5 }}
              key={index}
            />
          )
        )}
      </View>
      <View style={styles.addAccountBox}>
        {titles.map((title, index) => (
          <View style={styles.rowView} key={index}>
            <Text style={styles.addText}>{title}: </Text>
            {title === 'Gender' ? (
              <View style={styles.pickerView}>
                <RNPickerSelect
                  onValueChange={value => changeHandler(value, 'gender')}
                  items={[
                    { label: 'Female', value: 'Female' },
                    { label: 'Male', value: 'Male' }
                  ]}
                  placeholder={{
                    value: 'Select',
                    displayValue: true,
                    key: 'Select'
                  }}
                  useNativeAndroidPickerStyle={true}
                  style={pickerStyle}
                />
                <Text>&nbsp;</Text>
                <ArrowIcon
                  name="triangle-down"
                  size={15}
                  color={Colors.orangePink}
                />
              </View>
            ) : (
              <View style={styles.inputView}>
                <TextInput
                  style={styles.addInfoInput}
                  onChangeText={text => changeHandler(text, dbTitles[index])}
                  value={userInput[dbTitles[index]].toString()}
                />
              </View>
            )}
          </View>
        ))}
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

AddPersonalDetails.navigationOptions = {
  headerTitle: 'Add Personal Details',
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

export default AddPersonalDetails;
