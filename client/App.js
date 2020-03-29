import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('useEffect() in hooks');

  useEffect(() => {
    loadData();
  }, [])

  const loadData = () => {
    const query = `
    {
      profiles(id:0) {
        username
        first_name
        last_name
        height
        weight
        age
        gender
        dob
        zip
        current_w
        goal_w
        weekly_goal
        activity_lvl
        workouts_per_wk
        min_per_workout
        image
      }
    }`;
    axios
      .post('http://192.168.1.14:8070/ct/graphql', { query })
      .then((result) => setName(result.data.data.profiles[0].first_name))
      .catch(err => console.error(err));
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{name}'s profile</Text>
        {/* <Button title="load" onPress={loadData} /> */}
      </View>
      <ScrollView>
      <View>
        <Text style={styles.basicProfile}>Basic Profile</Text>
      </View>
      <View>
        <Text style={styles.personalDetails}>Personal Details</Text>
      </View>
      <View>
        <Text style={styles.goals}>Goals</Text>
      </View>
      <View>
        <Text style={styles.fitnessGoals}>Fitness Goals</Text>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    flexDirection: 'column',
    height: 300
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    textAlign: 'center'
  },
  basicProfile: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  personalDetails: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  goals: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fitnessGoals: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
