import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../styles/colors';
import ArrowIcon from 'react-native-vector-icons/Octicons';
import { editContainerStyle } from '../styles';
import { pickerStyle } from '../styles/common';
import RNPickerSelect from 'react-native-picker-select';

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
const titles = ['Workouts/Week', 'Minutes/Workout'];
const dbTitles = ['workouts_per_wk', 'min_per_workout'];

const EditWorkoutPlans = ({ profile, changeHandler }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>WORKOUT PLANS</Text>
      <View style={styles.details}>
        {titles.map((title, index) => (
          <View key={index}>
            <View style={styles.row}>
              <Text style={styles.item}>{title}</Text>
              <View style={styles.inputView}>
                <RNPickerSelect
                  onValueChange={value => changeHandler(value, dbTitles[index])}
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

const styles = StyleSheet.create(editContainerStyle);

export default EditWorkoutPlans;
