import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { workoutPlansStyle } from '../styles';

const titles = ['Workouts/Week', 'Minutes/Workout'];
const dbTitles = ['workouts_per_wk', 'min_per_workout'];

const WorkoutPlans = ({ profile }) => {
  return (
    <View style={styles.workoutPlans}>
      { titles.map((title, index) => (
        <View style={styles.entry} key={index}>
          <Text style={styles.itemsTitle}>{title}</Text>
          <Text style={styles.itemsText}>{profile[dbTitles[index]]}</Text>
        </View>
      )) }
    </View>
  );
};

const styles = StyleSheet.create(workoutPlansStyle);

export default WorkoutPlans;
