import React, { useEffect, useState, useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Colors from "./constants/Colors";
import EditIcon from "react-native-vector-icons/Feather";
import ArrowIcon from "react-native-vector-icons/Octicons";

import RNPickerSelect from "react-native-picker-select";

const EditPersonalDetails = ({ profile }) => {
  const titles = [
    "Height",
    "Weight",
    "Age",
    "Gender",
    "Date of Birth",
    "Zip Code"
  ];
  const dbTitles = ["height", "weight", "age", "gender", "dateOfBirth", "zip"];
  const { height, weight, age, gender, dateOfBirth, zip } = profile;
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      height,
      weight,
      age,
      gender,
      dateOfBirth,
      zip
    }
  );

  const changeHandler = (text, title) => {
    setUserInput({ [title]: text });
  };

  return (
    <View style={styles.editPersonalDetails}>
      <Text style={styles.title}>PERSONAL DETAILS</Text>
      <View style={styles.details}>
        {titles.map((title, index) => (
          <View key={index}>
            <View style={styles.row}>
              <Text style={styles.item}>{title}</Text>
              {title === "Gender" ? (
                <View style={styles.inputView}>
                  <RNPickerSelect
                    onValueChange={value => console.log(value)}
                    items={[
                      { label: "Female", value: "female" },
                      { label: "Male", value: "male" }
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

const styles = StyleSheet.create({
  editPersonalDetails: {
    width: "100%"
  },
  title: {
    color: Colors.mediumGrey,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 15
  },
  details: {
    backgroundColor: Colors.sectionBackground
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1
  },
  item: {
    color: Colors.lightGrey,
    justifyContent: "center",
    // backgroundColor: 'blue',
    flex: 0.3
  },
  inputView: {
    flexDirection: "row",
    // backgroundColor: 'white',
    flex: 0.7,
    justifyContent: "flex-end"
  },
  info: {
    color: Colors.mediumGrey
  },
  line: {
    backgroundColor: Colors.background,
    height: 1
  }
});

const pickerStyle = {
  inputIOS: {
    color: Colors.mediumGrey
  },
  inputAndroid: {
    color: Colors.mediumGrey
  },
  placeholderColor: Colors.mediumGrey
};

export default EditPersonalDetails;
