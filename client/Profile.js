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
        <Lines />
      </View>
      <View style={styles.BMR}>
        <BMR profile={profile}/>
      </View>
      <View style={{alignItems: 'center'}}>
        <Lines />
      </View>
      <View style={styles.personalDetailsContainer}>
        <PersonalDetails profile={profile}/>
      </View>
      <View style={styles.fitnessGoalsContainer}>
        <FitnessGoals />
      </View>
      <View style={styles.workoutPlansContainer}>
        <WorkoutPlans />
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
    height: 150
  },
  basicProfile: {
    paddingBottom: 20
  },
  BMR: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  personalDetailsContainer: {
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fitnessGoalsContainer: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  workoutPlansContainer: {
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Profile;