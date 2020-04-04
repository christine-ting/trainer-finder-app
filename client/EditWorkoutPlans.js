import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Colors from './constants/Colors';

const EditWorkoutPlans = ({ profile }) => {
  return (
    <View style={styles.editWorkoutPlans}>
    <Text style={styles.title}>WORKOUT PLANS</Text>
    <View style={styles.details}>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.item}>Workouts/Week</Text>
          <Text style={styles.info}>
            {profile.workouts_per_wk}&nbsp;&nbsp;
            <Icon name="triangle-down" size={15} color={Colors.mediumGrey} />
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.item}>Minutes/Workout</Text>
          <Text style={styles.info}>
            {profile.min_per_workout}&nbsp;&nbsp;
            <Icon name="triangle-down" size={15} color={Colors.mediumGrey} />
          </Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  editWorkoutPlans: {
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

export default EditWorkoutPlans;