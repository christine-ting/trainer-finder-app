import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Profile from './Profile';
import Footer from './Footer';
import Icon from 'react-native-vector-icons/Feather';
import { profilePageStyle } from '../styles';
import Colors from '../styles/colors';

const query = `
  {
    profiles(id:0) {
      email
      first_name
      last_name
      height
      weight
      age
      gender
      date_of_birth
      zip
      goal_w
      weekly_goal
      activity_lvl
      workouts_per_wk
      min_per_workout
      profile_pic
      cover_photo
    }
  }`;
let accessNavigation;
let profileInfo;

const ProfilePage = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    navigation.addListener(
      'didFocus',
      payload => {
        getUserProfile();
      }
    );
    accessNavigation = navigation;
  }, []);
  
  const getUserProfile = () => {
    axios
      .post('http://192.168.1.20:8070/ct/graphql', { query })
      .then(result => { 
        setProfile(result.data.data.profiles[0]);
        profileInfo = result.data.data.profiles[0];
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.profilePage}>
          <View style={styles.scrollProfile}>
            <ScrollView>
              <Profile profile={profile} />
            </ScrollView>
          </View>
          <View style={styles.footerContainer}>
            <Footer />
          </View>
        </View>
      )}
    </View>
  );
};

ProfilePage.navigationOptions = {
  headerTitle: 'Profile',
  headerStyle: {
    backgroundColor: Colors.headerFooter,
    shadowColor: 'transparent'
  },
  headerRight: () => (
    <Icon
      name='edit'
      size={25}
      style={styles.editIcon}
      onPress={() =>
        accessNavigation.navigate({
          routeName: 'EditMode',
          params: {
            profile: profileInfo
          }
        })
      }
    />
  ),
  headerTintColor: Colors.lightGrey,
  headerTitleStyle: {
    fontSize: 20
  }
};

const styles = StyleSheet.create(profilePageStyle);

export default ProfilePage;
