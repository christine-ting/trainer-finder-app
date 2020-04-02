import React, { useEffect, useState } from "react";
// import zipcodes from 'zipcodes';
import Icon from "react-native-vector-icons/AntDesign";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ProfilePic from "./ProfilePic";
import { grey, blue } from "color-name";
import EditPhoto from "./EditPhoto";

const BasicProfile = ({ profile }) => {
  const [fontLoaded, loadFont] = useState(false);
  const [showEditPhotoModal, clickToShowModal] = useState(false);

  async function loadmyFont() {
    let response = await Expo.Font.loadAsync({
      "pixel-font": require("../assets/fonts/Muli-Bold.ttf")
    });
    loadFont(true);
  }

  useEffect(() => {
    loadmyFont();
  }, []);

  const clicktoEditPhoto = name => {
    console.log(name);
    clickToShowModal(!showEditPhotoModal);
  };

  return (
    <View style={styles.basicProfile}>
      {/* <Icon name='camera' size={18} color='rgb(190,190,190)' /> */}
      <View>
        <View style={styles.profilePicContainer}>
          <ProfilePic profile={profile} />
        </View>
        {/* <Icon name="edit" size={25} color="black" /> */}
        {fontLoaded ? (
          <View style={styles.profileView}>
            <Text style={styles.profileName}>
              {profile.first_name} {profile.last_name}
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.editCoverPhotoContainer}>
        <TouchableOpacity
          style={styles.editCoverPhotoBackground}
          onPress={() => clicktoEditPhoto("cover")}
        >
          <Icon name="camera" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={styles.editProfilePicContainer}
        name="profile"
        onPress={() => clicktoEditPhoto("profile")}
      >
        <TouchableOpacity
          style={styles.editProfilePicBackground}
          onPress={() => clicktoEditPhoto("cover")}
        >
          <Icon name="camera" size={20} color="black" />
        </TouchableOpacity>
      </View>
      {showEditPhotoModal && <EditPhoto clicktoEditPhoto={clicktoEditPhoto} />}
    </View>
  );
};

export default BasicProfile;

const styles = StyleSheet.create({
  basicProfile: {
    // justifyContent: "space-evenly",
    // alignItems: "stretch",
    // flexDirection: "row",
    width: "100%",
    backgroundColor: "rgb(62,69,73)",
    flexDirection: "row",
    position: "relative",
    justifyContent: "center"
  },
  profilePicContainer: {
    // backgroundColor: 'grey',
    // paddingRight: 20
  },
  profileView: {
    justifyContent: "center",
    alignItems: "center"
  },
  profileName: {
    fontSize: 25,
    color: "rgb(240,240,240)",
    fontFamily: "pixel-font",
    paddingVertical: 15
  },
  profileText: {
    // backgroundColor: 'blue',
    color: "rgb(240,240,240)"
    // paddingRight: 20
  },
  editCoverPhotoContainer: {
    alignItems: "flex-end",
    position: "absolute",
    width: "92%",
    top: -40,
    paddingBottom: 10,
    paddingRight: 10
  },
  editCoverPhotoBackground: {
    backgroundColor: "rgb(190,190,190)",
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 5
  },
  editProfilePicContainer: {
    alignItems: "center",
    position: "absolute",
    width: "92%",
    paddingTop: 40,
    paddingLeft: 130
  },
  editProfilePicBackground: {
    backgroundColor: "rgb(190,190,190)",
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 20,
    borderColor: "rgb(62,69,73)",
    borderWidth: 4
  }
});
