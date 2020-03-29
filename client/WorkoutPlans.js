import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground } from 'react-native';

const WorkoutPlans = () => {
  return (
    <View style={styles.workoutPlans}>
      <Text>Workout plans component</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  workoutPlans: {
    backgroundColor: 'steelblue',
    opacity: 0.6,
    padding: 50,
    borderRadius: 700/ 70,
    marginTop: 10,
    marginBottom: 20
  }
});

export default WorkoutPlans;