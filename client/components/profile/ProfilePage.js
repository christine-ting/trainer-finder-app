import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Profile from './Profile';
import EditIcon from 'react-native-vector-icons/Feather';
import LogoutIcon from 'react-native-vector-icons/SimpleLineIcons';
import { profilePageStyle } from '../../styles/profile';
import Colors from '../../styles/profile/colors';

let accessNavigation;
let profileInfo;

const ProfilePage = ({ navigation }) => {
  const email = navigation.getParam('email');
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
    const query = `
    {
      profiles(email:"${email}") {
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
    axios
      .post('http://192.168.1.20:8070/ct/graphql', { query })
      .then(result => { 
        profileInfo = result.data.data.profiles[0];
        setProfile(profileInfo);
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
  headerTintColor: Colors.lightGrey,
  headerTitleStyle: {
    fontSize: 20
  },
  headerRight: () => (
    <EditIcon
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
  headerLeft: () => (
    <LogoutIcon
      name='logout'
      size={20}
      style={styles.logoutIcon}
      onPress={() => 
        accessNavigation.navigate({
          routeName: 'Auth'
        })
      }
    /> 
  )
};

const styles = StyleSheet.create(profilePageStyle);

export default ProfilePage;
