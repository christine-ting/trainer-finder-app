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
        <View style={styles.entry}>
          <Text style={styles.itemsTitle}>Workouts/Week</Text>
          <Text style={styles.itemsText}>{profile.workouts_per_wk}</Text>
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
        <View style={styles.entry}>
          <Text style={styles.itemsTitle}>Minutes/Workout</Text>
          <Text style={styles.itemsText}>{profile.min_per_workout}</Text>
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
    backgroundColor: 'rgb(62,69,73)',
    paddingHorizontal: 50,
    paddingBottom: 15,
    paddingTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: 'rgb(230,94,80)',
    borderBottomWidth: 1  
  },
  itemsTitle: {
    color: 'rgb(190,190,190)'
  },
  entry: {
    paddingRight: 40
  }, 
  itemsText: {
    color: 'rgb(240,240,240)',
    paddingTop: 8,
    marginLeft: 3
  }
});

export default WorkoutPlans;
