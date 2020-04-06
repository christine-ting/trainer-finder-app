import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ProfilePic from "./ProfilePic";
import EditPhoto from "./EditPhoto";

const BasicProfile = ({ profile, updateCoverPhoto }) => {
  const [fontLoaded, loadFont] = useState(false);
  const [showEditPhotoModal, setShowModal] = useState(false);
  const [photoType, setPhotoType] = useState("");
  const [profilePic, updateProfilePic] = useState(profile.image);

  async function loadmyFont() {
    let response = await Expo.Font.loadAsync({
      "pixel-font": require("../../assets/fonts/Muli-Bold.ttf")
    });
    loadFont(true);
  }

  useEffect(() => {
    loadmyFont();
  }, []);

  const clicktoEditPhoto = (photoType) => {
    setShowModal(!showEditPhotoModal);
    setPhotoType(photoType);
  };

  const changeProfilePic = (uri) => {
    updateProfilePic({ uri });
  };

  const changeCoverPhoto = (uri) => {
    updateCoverPhoto({ uri });
  }

  return (
    <View style={styles.basicProfile}>
      <View>
        <View style={styles.profilePicContainer}>
          <ProfilePic profile={profile} profilePic={profilePic}/>
        </View>
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
      <View style={styles.editProfilePicContainer}>
        <TouchableOpacity
          style={styles.editProfilePicBackground}
          onPress={() => clicktoEditPhoto("profile")}
        >
          <Icon name="camera" size={20} color="black" />
        </TouchableOpacity>
      </View>
      {showEditPhotoModal && (
        <EditPhoto
          changeProfilePic={changeProfilePic}
          changeCoverPhoto={changeCoverPhoto}
          photoType={photoType}
          setShowModal={setShowModal}
        />
      )}
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
