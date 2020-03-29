import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground, Picker } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


const weekly_workouts = [...Array(29).keys()].map((qty) => ({ label: `${qty}`, value: `${qty}` }));
const workout_min = [...Array(361).keys()];

const FitnessGoals = (props) => {
  return (
    <View>
      
      <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={weekly_workouts}
          placeholder={{label: `${props.workouts_per_wk}`, value: `${props.workouts_per_wk}`}}
          placeholderTextColor="red"
      />
    </View>
  );
};

export default FitnessGoals;