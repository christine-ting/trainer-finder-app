import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image
} from "react-native";
import BasicProfile from "./BasicProfile";
import PersonalDetails from "./PersonalDetails";
import FitnessGoals from "./FitnessGoals";
import WorkoutPlans from "./WorkoutPlans";
import BMR from "./BMR";
import Lines from "./Lines";
import Icon from "react-native-vector-icons/Ionicons";
import { profileStyle } from "../styles";

const Profile = ({ profile }) => {
  console.log('PROFILE:', profile)
  const [fontLoaded, loadFont] = useState(false);
  const [coverPhoto, updateCoverPhoto] = useState({
    uri:
      "https://mvpuploadimg.s3-us-west-1.amazonaws.com/Screen+Shot+2020-03-09+at+9.10.16+AM.png"
  });

  async function loadmyFont() {
    let response = await Expo.Font.loadAsync({
      "pixel-font": require("../../assets/fonts/Muli-Medium.ttf")
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
          <View style={styles.sectionContainer}>
            <View>
              <View style={styles.sectionTitle}>
                <View style={styles.iconBackground}>
                  <Icon name="ios-fitness" size={18} color="rgb(190,190,190)" />
                </View>
                <Text style={styles.headerText}>Personal Details</Text>
              </View>
              <PersonalDetails profile={profile} />
            </View>
            <View style={styles.verticalLine}></View>
          </View>
          <View style={styles.sectionContainer}>
            <View>
              <View style={styles.sectionTitle}>
                <View style={styles.iconBackground}>
                  <Icon name="ios-fitness" size={18} color="rgb(190,190,190)" />
                </View>
                <Text style={styles.headerText}>Fitness Goals</Text>
              </View>
              <FitnessGoals profile={profile} />
            </View>
            <View style={styles.verticalLine}></View>
          </View>
          <View style={styles.sectionContainer}>
            <View>
              <View style={styles.sectionTitle}>
                <View style={styles.iconBackground}>
                  <Icon name="ios-fitness" size={18} color="rgb(190,190,190)" />
                </View>
                <Text style={styles.headerText}>Workout Plans</Text>
              </View>
              <WorkoutPlans profile={profile} />
            </View>
            <View style={styles.shortVerticalLine}></View>
          </View>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create(profileStyle);

export default Profile;
