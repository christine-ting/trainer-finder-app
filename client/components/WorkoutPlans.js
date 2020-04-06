import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import { workoutPlansStyle } from '../styles';

const WorkoutPlans = ({ profile }) => {
  return (
    <View style={styles.workoutPlans}>
        <View style={styles.entry}>
          <Text style={styles.itemsTitle}>Workouts/Week</Text>
          <Text style={styles.itemsText}>{profile.workouts_per_wk}</Text>
      </View>
        <View style={styles.entry}>
          <Text style={styles.itemsTitle}>Minutes/Workout</Text>
          <Text style={styles.itemsText}>{profile.min_per_workout}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(workoutPlansStyle);

export default WorkoutPlans;
