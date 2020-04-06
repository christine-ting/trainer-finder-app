import React, { useEffect, useState, useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Colors from "./constants/Colors";
import ArrowIcon from "react-native-vector-icons/Octicons";

import RNPickerSelect from "react-native-picker-select";

const weekly_workouts = [...Array(29).keys()];
const weeklyWorkoutsSelection = weekly_workouts.map(workout => ({
  label: workout.toString(),
  value: workout.toString()
}));
const workout_min = [...Array(361).keys()];
const workoutMinSelection = workout_min.map(min => ({
  label: min.toString(),
  value: min.toString()
}));
const selections = [weeklyWorkoutsSelection, workoutMinSelection];

const titles = ["Workouts/Week", "Minutes/Workout"];
const dbTitles = ["workouts_per_wk", "min_per_workout"];

const EditWorkoutPlans = ({ profile }) => {

  return (
    <View style={styles.editWorkoutPlans}>
      <Text style={styles.title}>WORKOUT PLANS</Text>
      <View style={styles.details}>
        {titles.map((title, index) => (
          <View key={index}>
            <View style={styles.row}>
              <Text style={styles.item}>{title}</Text>
              <View style={styles.inputView}>
                <RNPickerSelect
                  onValueChange={value => console.log(value)}
                  items={selections[index]}
                  placeholder={{
                    value: `${profile[dbTitles[index]]}`,
                    displayValue: true,
                    key: `${profile[dbTitles[index]]}`
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
            </View>
            <View style={styles.line} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  editWorkoutPlans: {
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
    flex: 0.5
  },
  inputView: {
    flexDirection: "row",
    flex: 0.5,
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

export default EditWorkoutPlans;
