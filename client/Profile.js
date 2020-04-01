import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import BasicProfile from './BasicProfile';
import PersonalDetails from './PersonalDetails';
import FitnessGoals from './FitnessGoals';
import WorkoutPlans from './WorkoutPlans';
import BMR from './BMR';
import Lines from './Lines';

const image = { uri: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/Screen+Shot+2020-03-09+at+9.10.16+AM.png' };

const Profile = ({ profile }) => {
  return (
    <View style={styles.profile}>
      <Image source={image} style={styles.coverPhoto} />
      <View style={styles.basicProfile}>
        <BasicProfile profile={profile}/>
      </View>
      <View style={{alignItems: 'center'}}>
      </View>
      <View style={styles.BMRContainer}>
        <BMR profile={profile}/>
      </View>
      <Lines />
      <View style={styles.personalDetailsContainer}>
        <View style={styles.personalDetailsHeader}>
          <Text style={{fontSize: 20}}>Personal Details</Text>
        </View>
        <PersonalDetails profile={profile}/>
      </View>
      <Lines />
      <View style={styles.fitnessGoalsHeader}>
          <Text style={{fontSize: 20}}>Fitness Goals</Text>
      </View>
      <View style={styles.fitnessGoalsContainer}>
        <FitnessGoals profile={profile}/>
      </View>
      <Lines />
      <View style={styles.workoutPlansHeader}>
          <Text style={{fontSize: 20}}>Workout Plans</Text>
      </View>
      <View style={styles.workoutPlansContainer}>
        <WorkoutPlans profile={profile}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  profile: {    
    justifyContent: 'space-evenly'
  },
  coverPhoto: {
    width: '100%',
    height: 140
  },
  basicProfile: {
    // paddingBottom: 20
  },
  BMRContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  personalDetailsContainer: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  personalDetailsHeader: {
    paddingVertical: 10,
    width: '90%'
  },
  fitnessGoalsContainer: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fitnessGoalsHeader: {
    paddingVertical: 10,
    // width: '90%'
  },
  workoutPlansContainer: {
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  workoutPlansHeader: {
    paddingVertical: 10,
    // width: '90%'
  }
});

export default Profile;