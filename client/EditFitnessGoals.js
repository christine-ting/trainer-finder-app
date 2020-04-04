import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Colors from './constants/Colors';

const EditFitnessGoals = ({ profile }) => {
  const titles = ['Current Weight', 'Goal Weight', 'Weekly Goal', 'Activity Level'];
  const dbTitles = ['weight', 'goal_w', 'weekly_goal', 'activity_lvl'];
  return (
    <View style={styles.editFitnessGoals}>
    <Text style={styles.title}>FITNESS GOALS</Text>
    <View style={styles.details}>
      { titles.map((title, index) => (
        <View>
          <TouchableOpacity style={styles.row}>
            <Text style={styles.item}>{title}</Text>
            <Text style={styles.info}>
              {profile[dbTitles[index]]}&nbsp;&nbsp;
              <Icon name="triangle-down" size={15} color={Colors.mediumGrey} />
            </Text>
          </TouchableOpacity>
          <View style={styles.line}/>
        </View>
      )) }
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  editFitnessGoals: {
    width: '100%'
  },
  title: {
    color: Colors.mediumGrey,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 15
  },
  details: {
    backgroundColor: Colors.sectionBackground
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  item: {
    color: Colors.lightGrey,
    justifyContent: 'center'
  },
  info: {
    color: Colors.mediumGrey
  },
  line: {
    backgroundColor: Colors.background,
    height: 1,
    width: '100%'
  }
})

export default EditFitnessGoals;