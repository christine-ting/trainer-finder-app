import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { profilePicStyle } from '../../styles/profile';



const ProfilePic = ({ profilePic }) => {
  return (
    <View style={styles.profilePicContainer}>
      <View style={styles.profilePicBackground}>
        <Image source={profilePic} style={styles.profilePic}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(profilePicStyle);

export default ProfilePic;