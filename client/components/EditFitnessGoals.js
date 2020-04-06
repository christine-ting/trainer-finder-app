import React, { useEffect, useState, useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";
import Colors from "../constants/Colors";
import EditIcon from "react-native-vector-icons/Feather";
import ArrowIcon from "react-native-vector-icons/Octicons";
import RNPickerSelect from "react-native-picker-select";

const goals = [
  "Lose 0.5 lbs per week",
  "Lose 1 lb per week",
  "Lose 1.5 lbs per week",
  "Lose 2 lbs per week",
  "Maintain weight",
  "Gain 0.5 lbs per week",
  "Gain 1 lb per week"
];
const goalsSelection = goals.map(goal => ({ label: goal, value: goal }));
const levels = ["Not Very Active", "Lightly Active", "Active", "Very Active"];
const levelsSelection = levels.map(level => ({ label: level, value: level }));
const titles = [
  "Current Weight",
  "Goal Weight",
  "Weekly Goal",
  "Activity Level"
];
const dbTitles = ["weight", "goal_w", "weekly_goal", "activity_lvl"];

const EditFitnessGoals = ({ profile, userInput, changeHandler }) => {

  return (
    <View style={styles.editFitnessGoals}>
      <Text style={styles.title}>FITNESS GOALS</Text>
      <View style={styles.details}>
        {titles.map((title, index) => (
          <View key={index}>
            <View style={styles.row}>
              <Text style={styles.item}>{title}</Text>
              {title === "Current Weight" || title === "Goal Weight" ? (
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.info}
                    value={userInput[dbTitles[index]].toString()}
                    onChangeText={text => changeHandler(text, dbTitles[index])}
                  />
                  <Text>&nbsp;</Text>
                  <EditIcon name="edit-2" size={15} color={Colors.orangePink} />
                </View>
              ) : title === "Weekly Goal" ? (
                <View style={styles.inputView}>
                  <RNPickerSelect
                    onValueChange={value => changeHandler(value, 'weekly_goal')}
                    items={goalsSelection}
                    placeholder={{
                      value: `${profile.weekly_goal}`,
                      displayValue: true,
                      key: `${profile.weekly_goal}`
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
                  <RNPickerSelect
                    onValueChange={value => changeHandler(value, 'activity_lvl')}
                    items={levelsSelection}
                    placeholder={{
                      value: `${profile.activity_lvl}`,
                      displayValue: true,
                      key: `${profile.activity_lvl}`
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
  editFitnessGoals: {
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

export default EditFitnessGoals;
