import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground } from 'react-native';
import ProfilePic from './ProfilePic';
import { grey } from 'color-name';

const BasicProfile = ({ profile }) => {
  return (
    <View style={styles.basicProfile}>
      <View style={styles.profilePic}>
        <ProfilePic profile={profile}/>
      </View>
      <View style={styles.profileText}>
        <Text style={{fontSize: 25}}>{profile.first_name} {profile.last_name}</Text>
        <Text>{profile.email}</Text>
      </View>
    </View>
  )
}

export default BasicProfile;

const styles = StyleSheet.create({
  basicProfile: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    flexDirection: 'row',
    width: '100%',
    // padding: 20
  },
  profilePic: {
    // flex: 1
  },
  profileText: {
    justifyContent: 'center'
    // padding: 10
  }
})