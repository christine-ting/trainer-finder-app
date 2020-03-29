import React from "react";
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
      <View style={styles.profileText}>
        <Text style={{ fontSize: 25 }}>
          {profile.first_name} {profile.last_name}
        </Text>
        <Text>{profile.email}</Text>
      </View>
    </View>
  );
};

export default BasicProfile;

const styles = StyleSheet.create({
  basicProfile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "row",
    width: "100%"
  },
  profilePicContainer: {
    // backgroundColor: 'grey',
    paddingRight: 30
  },
  profileText: {
    // backgroundColor: 'blue',
    justifyContent: "center",
    paddingRight: 20
  }
});
