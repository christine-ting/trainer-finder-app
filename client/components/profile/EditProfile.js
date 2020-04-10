import React, { useEffect, useReducer } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import EditAccount from './EditAccount';
import EditPersonalDetails from './EditPersonalDetails';
import EditFitnessGoals from './EditFitnessGoals';
import EditWorkoutPlans from './EditWorkoutPlans';
import axios from 'axios';
import Colors from '../styles/colors';
import { editProfileStyle } from '../styles';

let accessNavigation;
let newDetails = {};
const editComponents = [
  EditAccount,
  EditPersonalDetails,
  EditFitnessGoals,
  EditWorkoutPlans
];

const EditProfile = ({ navigation }) => {
  const profile = navigation.getParam('profile');
  useEffect(() => {
    accessNavigation = navigation;
  }, []);

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    profile
  );

  const changeHandler = (text, title) => {
    newDetails = userInput;
    newDetails[title] = text;
    setUserInput({ [title]: text });
  };

  return (
    <View style={styles.editProfile}>
      <View style={styles.scrollProfile}>
        <ScrollView>
          { editComponents.map((Component, index) => (
            <Component 
              profile={profile}
              userInput={userInput}
              changeHandler={changeHandler}
              key={index}
            />
          )) }
          <View style={styles.appNameView}>
            <Text style={styles.appName}>Trainer Finder</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const updateDatabase = () => {
  const {
    email,
    first_name,
    last_name,
    height,
    weight,
    age,
    gender,
    date_of_birth,
    zip,
    goal_w,
    weekly_goal,
    activity_lvl,
    workouts_per_wk,
    min_per_workout
  } = newDetails;
  const mutation = `
  mutation updateProfile {
  updateProfile(
    id:0,
    email:"${email}"
    first_name:"${first_name}",
    last_name:"${last_name}",
    height:"${height}",
    weight:"${weight}",
    age:${age},
    gender:"${gender}",
    date_of_birth:"${date_of_birth}",
    zip:${zip},
    goal_w:"${goal_w}",
    weekly_goal:"${weekly_goal}",
    activity_lvl:"${activity_lvl}",
    workouts_per_wk:${workouts_per_wk},
    min_per_workout:${min_per_workout}
    ) { id } 
  }`;
  axios
    .post('http://192.168.1.20:8070/ct/graphql', { query: mutation })
    .then(() => console.log('database updated'))
    .catch(err => console.error(err));
};

EditProfile.navigationOptions = {
  headerTitle: 'Edit Profile',
  headerStyle: {
    backgroundColor: Colors.headerFooter,
    shadowColor: 'transparent'
  },
  headerRight: () => (
    <Button
      title="Save"
      color={Colors.orangePink}
      onPress={() => {
        updateDatabase();
        accessNavigation.navigate({ routeName: 'Profile' });
      }}
    />
  ),
  headerTintColor: Colors.mediumGrey,
  headerTitleStyle: {
    fontSize: 20
  }
};

const styles = StyleSheet.create(editProfileStyle);

export default EditProfile;
