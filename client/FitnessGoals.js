import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground, Picker } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';


const FitnessGoals = ({ profile }) => {
  const title = ['Current Weight', 'Goal Weight', 'Weekly Goal', 'Activity Level'];
  const dbTitle = ['weight', 'goal_w', 'weekly_goal', 'activity_lvl'];
  return (
    <View style={styles.fitnessGoals}>
      { title.map((title, index) => (
        <View style={styles.row} key={index}>
          <Text>{title}</Text>
          <Text>{profile[dbTitle[index]]}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  fitnessGoals: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'rgb(132,148,164)',
    padding: 10,
    width: '90%',
    borderRadius: 700 / 150,
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  }
});
export default FitnessGoals;