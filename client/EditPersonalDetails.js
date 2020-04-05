import React, { useEffect, useState } from "react";
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
  const [ inputHeight, changeHeight ] = useState(profile.height);
  const editEntry = (text, title) => {
    console.log(text, title);
  };

  return (
    <View style={styles.editPersonalDetails}>
      <Text style={styles.title}>PERSONAL DETAILS</Text>
      <View style={styles.details}>
        {titles.map((title, index) => {
          if (title === "Gender") {
            return (
              <View style={styles.row}>
                <Text style={styles.item}>Gender</Text>
                <View style={styles.inputView}>
                  <RNPickerSelect
                    onValueChange={value => console.log(value)}
                    items={[
                      { label: "Female", value: "female", color: "white" },
                      { label: "Male", value: "male", color: "white" }
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
                    color={Colors.mediumGrey}
                  />
                </View>
              </View>
            );
          }
          return (
            <View>
              <View style={styles.row}>
                <Text style={styles.item}>{title}</Text>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.info}
                    value={profile[dbTitles[index]].toString()}
                    onChangeText={text => editEntry(text, dbTitles[index])}
                  />
                  <Text>&nbsp;</Text>
                  <EditIcon name="edit-2" size={15} color={Colors.mediumGrey} />
                </View>
              </View>
              <View style={styles.line} />
            </View>
          );
        })}
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
