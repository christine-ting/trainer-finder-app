import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import BasicProfile from './BasicProfile';
const image = { uri: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/Screen+Shot+2020-03-09+at+9.10.16+AM.png' };

const Profile = ({ profile }) => {
  return (
    <View style={styles.profile}>
      <Image source={image} style={styles.coverPhoto} />
      <View style={styles.basicProfile}>
        <BasicProfile profile={profile}/>
      </View>
      <View style={styles.personalDetails}>
        <Text>Personal Details</Text>
      </View>
      <View style={styles.goals}>
        <Text>Goals</Text>
      </View>
      <View style={styles.fitnessGoals}>
        <Text>Fitness Goals</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  profile: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-start'
  },
  coverPhoto: {
    flex: 1,
    width: '100%',
    height: 150
  },
  basicProfile: {
    flex: 1
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

export default Profile;