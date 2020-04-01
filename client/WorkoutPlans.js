import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import RNPickerSelect from "react-native-picker-select";


const WorkoutPlans = ({ profile }) => {
  const numOfWorkoutsPerWeek = [...Array(29).keys()].map((workout) => ({
    label: `${workout}`,
    value: `${workout}`
  }));
  const workoutMinutes = [...Array(361).keys()].map((min) => ({
    label: `${min}`,
    value: `${min}`
  }));
  return (
    <View style={styles.workoutPlans}>
      <View style={styles.workoutsPerWeek}>
        <Text>Workouts/Week</Text>
        <Text>{profile.workouts_per_wk}</Text>
        {/* <RNPickerSelect
          onValueChange={value => console.log(value)}
          items={numOfWorkoutsPerWeek}
          placeholder={{
            value: `${profile.workouts_per_wk}`,
            displayValue: true,
            key: `${profile.workouts_per_wk}`,
          }}
          placeholderTextColor='black'
          useNativeAndroidPickerStyle={true}
          /> */}
      </View>
      <View style={styles.minutesPerWorkout}>
      <Text>Minutes/Workout</Text>
      <Text>{profile.min_per_workout}</Text>
      {/* <RNPickerSelect
        onValueChange={value => console.log(value)}
        items={workoutMinutes}
        placeholder={{
          value: `${profile.min_per_workout}`,
          displayValue: true,
          key: `${profile.min_per_workout}`
        }}
        placeholderTextColor='black'
        useNativeAndroidPickerStyle={true}
      /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  workoutPlans: {
    backgroundColor: "steelblue",
    opacity: 0.6,
    padding: 50,
    borderRadius: 700 / 70,
    marginTop: 10,
    marginBottom: 20
  },
  workoutsPerWeek: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  minutesPerWorkout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
});

export default WorkoutPlans;
