import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground } from 'react-native';

const FitnessGoals = () => {
  return (
    <View style={styles.fitnessGoals}>
      <Text>Fitness goals component</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  fitnessGoals: {
    backgroundColor: 'gold',
    opacity: 0.6,
    padding: 50,
    borderRadius: 700/ 70,
    marginTop: 10
  }
});

export default FitnessGoals;