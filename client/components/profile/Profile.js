import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BasicProfile from './BasicProfile';
import PersonalDetails from './PersonalDetails';
import FitnessGoals from './FitnessGoals';
import WorkoutPlans from './WorkoutPlans';
import BMR from './BMR';
import Icon from 'react-native-vector-icons/Ionicons';
import { profileStyle } from '../../styles/profile';
import Colors from '../../styles/profile/colors';

const mainComponents = [ PersonalDetails, FitnessGoals, WorkoutPlans ];
const mainTitles = ['Personal Details', 'Fitness Goals', 'Workout Plans'];

const Profile = ({ profile }) => {
  const [fontLoaded, loadFont] = useState(false);
  const [coverPhoto, updateCoverPhoto] = useState({ uri: profile.cover_photo });

  async function loadmyFont() {
    let response = await Expo.Font.loadAsync({
      'pixel-font': require('../../../assets/fonts/Muli-Medium.ttf')
    });
    loadFont(true);
  }

  useEffect(() => {
    loadmyFont();
  }, []);

  return (
    <View style={styles.profile}>
      {fontLoaded ? (
        <View>
          <View style={styles.coverPotoView}>
            <Image source={coverPhoto} style={styles.coverPhoto} />
          </View>
          <View style={styles.basicProfile}>
            <BasicProfile
              profile={profile}
              updateCoverPhoto={updateCoverPhoto}
            />
          </View>
          <View style={styles.BMRContainer}>
            <BMR profile={profile} />
          </View>
          { mainComponents.map((Component, index) => (
            <View style={styles.sectionContainer} key={index}>
              <View>
                <View style={styles.sectionTitle}>
                  <View style={styles.iconBackground}>
                    <Icon name='ios-fitness' size={18} color={Colors.mediumGrey} />
                  </View>
                  <Text style={styles.headerText}>{mainTitles[index]}</Text>
                </View>
                <Component profile={profile} />
              </View>
              <View style={styles.verticalLine}></View>
            </View>
          )) }  
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create(profileStyle);

export default Profile;
