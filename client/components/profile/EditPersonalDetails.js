import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import EditIcon from 'react-native-vector-icons/Feather';
import ArrowIcon from 'react-native-vector-icons/Octicons';
import Colors from '../../styles/profile/colors';
import { editContainerStyle } from '../../styles/profile';
import { pickerStyle } from '../../styles/profile/common'; 
import RNPickerSelect from 'react-native-picker-select';


const titles = [
  'Height',
  'Weight',
  'Age',
  'Gender',
  'Date of Birth',
  'Zip Code'
];
const dbTitles = ['height', 'weight', 'age', 'gender', 'date_of_birth', 'zip'];

const EditPersonalDetails = ({ profile, userInput, changeHandler }) => {

  return (
    <View style={styles.main}>
      <Text style={styles.title}>PERSONAL DETAILS</Text>
      <View style={styles.details}>
        {titles.map((title, index) => (
          <View key={index}>
            <View style={styles.row}>
              <Text style={styles.item}>{title}</Text>
              {title === 'Gender' ? (
                <View style={styles.inputView}>
                  <RNPickerSelect
                    onValueChange={value => changeHandler(value, 'gender')}
                    items={[
                      { label: 'Female', value: 'Female' },
                      { label: 'Male', value: 'Male' }
                    ]}
                    placeholder={{
                      value: `${profile.gender}`,
                      displayValue: true,
                      key: `${profile.gender}`
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
                    style={styles.info}
                    value={userInput[dbTitles[index]].toString()}
                    onChangeText={text => changeHandler(text, dbTitles[index])}
                  />
                  <Text>&nbsp;</Text>
                  <EditIcon name="edit-2" size={15} color={Colors.orangePink} />
                </View>
              )}
            </View>
            <View style={styles.line} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create(editContainerStyle);

export default EditPersonalDetails;
