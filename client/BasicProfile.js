import React from "react";
// import zipcodes from 'zipcodes';
import Icon from 'react-native-vector-icons/Feather';


import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ImageBackground
} from "react-native";
import ProfilePic from "./ProfilePic";
import { grey, blue } from "color-name";

const BasicProfile = ({ profile }) => {
  return (
    <View style={styles.basicProfile}>
      <View style={styles.profilePicContainer}>
        <ProfilePic profile={profile} />
      </View>
      {/* <Icon name="edit" size={25} color="black" /> */}
      <View style={styles.profileView}>
        <Text style={styles.profileName}>
          {profile.first_name} {profile.last_name}
        </Text>
        <Text style={styles.profileText}>{profile.email}</Text>
        <Text style={styles.profileText}>{profile.age} years old</Text>
        {/* <Text>{zipcodes.lookup(profile.zip).city}, {zipcodes.lookup(profile.zip).state}</Text> */}
      </View>
    </View>
  );
};

export default BasicProfile;

const styles = StyleSheet.create({
  basicProfile: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "stretch",
    flexDirection: "row",
    width: "100%",
    backgroundColor: 'rgb(43,49,54)'
  },
  profilePicContainer: {
    // backgroundColor: 'grey',
    // paddingRight: 20
  },
  profileView: {
    justifyContent: "center",
  },
  profileName: {
    fontSize: 25,
    color: 'rgb(240,240,240)',
  },
  profileText: {
    // backgroundColor: 'blue',
    color: 'rgb(240,240,240)',
    // paddingRight: 20
  }
});
