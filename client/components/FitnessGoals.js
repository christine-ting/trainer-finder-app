import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground, Picker } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';


const FitnessGoals = ({ profile }) => {
  const titles = [['Current Weight', 'Weekly Goal'], ['Goal Weight', 'Activity Level']];
  const dbTitles = [['weight', 'weekly_goal'], ['goal_w', 'activity_lvl']];
  return (
    <View style={styles.fitnessGoals}>
      { titles.map((title, index) => (
        <View style={styles.column} key={index}>
          <View style={styles.entry}>
            <Text style={styles.itemsTitle}>{title[0]}</Text>
            <Text style={styles.itemsText}>{profile[dbTitles[index][0]]}</Text>
          </View>
          <View style={styles.entry}>
            <Text style={styles.itemsTitle}>{title[1]}</Text>
            <Text style={styles.itemsText}>{profile[dbTitles[index][1]]}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  fitnessGoals: {
    backgroundColor: 'rgb(62,69,73)',
    paddingHorizontal: 50,
    paddingBottom: 15,
    paddingTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: 'rgb(230,94,80)',
    borderBottomWidth: 1  
  },
  column: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  entry: {
  },
  itemsTitle: {
    color: 'rgb(190,190,190)'
  },
  itemsText: {
    color: 'rgb(240,240,240)',
    paddingTop: 8,
    paddingBottom: 15,
    marginLeft: 3
  }
});
export default FitnessGoals;