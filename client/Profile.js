import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import BasicProfile from './BasicProfile';
import PersonalDetails from './PersonalDetails';
import FitnessGoals from './FitnessGoals';
import WorkoutPlans from './WorkoutPlans';
import BMR from './BMR';
import Lines from './Lines';
import Icon from 'react-native-vector-icons/Ionicons';

const image = { uri: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/Screen+Shot+2020-03-09+at+9.10.16+AM.png' };

const Profile = ({ profile }) => {
  const [fontLoaded, loadFont] = useState(false);
  
  async function loadmyFont() {
    let response = await Expo.Font.loadAsync({
      'pixel-font': require('../assets/fonts/Muli\-Medium.ttf'),
    });
    loadFont(true);
  };

  useEffect(() => {
    loadmyFont();
  }, []);

  return (
    <View style={styles.profile}>
    {
      fontLoaded ? (
        <View>
          <View style={styles.coverPotoView}>
            <Image source={image} style={styles.coverPhoto} />
          </View>
          <View style={styles.basicProfile}>
            <BasicProfile profile={profile}/>
          </View>
          <View style={styles.BMRContainer}>
            <BMR profile={profile}/>
          </View>
          <View style={styles.sectionContainer}>
            <View>
              <View style={styles.sectionTitle}>
                <View style={styles.iconBackground}>
                  <Icon name="ios-fitness" size={18} color='rgb(190,190,190)' />
                </View>
                <Text style={styles.headerText}>
                  Personal Details
                </Text>
              </View>
              <PersonalDetails profile={profile}/>
            </View>
            <View style={styles.verticalLine}></View>
          </View>
          <View style={styles.sectionContainer}>
            <View>
              <View style={styles.sectionTitle}>
                <View style={styles.iconBackground}>
                  <Icon name="ios-fitness" size={18} color='rgb(190,190,190)' />
                </View>
                <Text style={styles.headerText}>
                  Fitness Goals
                </Text>
              </View>
              <FitnessGoals profile={profile}/>
            </View>
            <View style={styles.verticalLine}></View>
          </View>
          <View style={styles.sectionContainer}>
            <View>
              <View style={styles.sectionTitle}>
                <View style={styles.iconBackground}>
                  <Icon name="ios-fitness" size={18} color='rgb(190,190,190)' />
                </View>
                <Text style={styles.headerText}>
                  Workout Plans
                </Text>
              </View>
              <WorkoutPlans profile={profile}/>
            </View>
            <View style={styles.verticalLine}></View>
          </View>
        </View>
      ) : null
    }
    </View>
  )
}
const styles = StyleSheet.create({
  profile: {    
    justifyContent: 'space-evenly',
    paddingBottom: 30
  },
  coverPotoView: {
    alignItems: 'center',
    backgroundColor: 'rgb(62,69,73)'
  },
  coverPhoto: {
    width: '92%',
    height: 180,
    borderRadius: 600 / 70,
  },
  basicProfile: {
  },
  BMRContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 15
  },
  sectionContainer: {
    // justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    position: 'relative',
    // marginBottom: 20
    width: '100%'
  },
  verticalLine: {
    backgroundColor: 'rgb(92,99,103)',
    width: 2,
    height: '87%',
    position: 'absolute',
    marginLeft: 30
  },
  sectionTitle: {
    paddingLeft: 16,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    width: '100%'
  },
  iconBackground: {
    backgroundColor: 'rgb(92,99,103)',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 2,
    paddingTop: 3
  },
  headerText: {
    color: 'rgb(190,190,190)',
    fontSize: 20,
    fontFamily: 'pixel-font',
    marginLeft: 10,
  }
});

export default Profile;