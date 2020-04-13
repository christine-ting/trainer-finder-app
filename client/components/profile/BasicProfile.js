import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ProfilePic from './ProfilePic';
import EditPhoto from './EditPhoto';
import { basicProfileStyle } from '../../styles/profile';

const BasicProfile = ({ profile, updateCoverPhoto }) => {
  const [fontLoaded, loadFont] = useState(false);
  const [showEditPhotoModal, setShowModal] = useState(false);
  const [photoType, setPhotoType] = useState('');
  const [profilePic, updateProfilePic] = useState({ uri: profile.profile_pic });

  async function loadmyFont() {
    let response = await Expo.Font.loadAsync({
      'pixel-font': require('../../../assets/fonts/Muli-Bold.ttf')
    });
    loadFont(true);
  };

  useEffect(() => {
    loadmyFont();
  }, []);

  const clicktoEditPhoto = (photoType) => {
    setShowModal(!showEditPhotoModal);
    setPhotoType(photoType);
  };

  // const changeProfilePic = (uri) => {
  //   updateProfilePic({ uri });
  // };

  const changeCoverPhoto = (uri) => {
    updateCoverPhoto({ uri });
  };

  return (
    <View style={styles.basicProfile}>
      <View>
        <View style={styles.profilePicContainer}>
          <ProfilePic profilePic={profilePic} />
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
          onPress={() => clicktoEditPhoto('cover_photo')}
        >
          <Icon name='camera' size={20} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.editProfilePicContainer}>
        <TouchableOpacity
          style={styles.editProfilePicBackground}
          onPress={() => clicktoEditPhoto('profile_pic')}
        >
          <Icon name='camera' size={20} color='black' />
        </TouchableOpacity>
      </View>
      {showEditPhotoModal && (
        <EditPhoto
          updateProfilePic={updateProfilePic}
          changeCoverPhoto={changeCoverPhoto}
          photoType={photoType}
          setShowModal={setShowModal}
          profile={profile}
        />
      )}
    </View>
  );
};

export default BasicProfile;

const styles = StyleSheet.create(basicProfileStyle);
