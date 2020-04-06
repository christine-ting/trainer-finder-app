import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground, Picker } from 'react-native';
import { blockStyle } from '../styles';

const FitnessGoals = ({ profile }) => {
  const titles = [['Current Weight', 'Weekly Goal'], ['Goal Weight', 'Activity Level']];
  const dbTitles = [['weight', 'weekly_goal'], ['goal_w', 'activity_lvl']];
  return (
    <View style={styles.main}>
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

const styles = StyleSheet.create(blockStyle);

export default FitnessGoals;