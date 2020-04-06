import React, { useEffect, useState, useReducer } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Colors from '../styles/colors';
import EditAccount from "./EditAccount";
import EditPersonalDetails from "./EditPersonalDetails";
import EditFitnessGoals from "./EditFitnessGoals";
import EditWorkoutPlans from "./EditWorkoutPlans";
import axios from "axios";
import { editProfileStyle } from '../styles';

let accessNavigation;
let newDetails = {};

const EditProfile = ({ navigation }) => {
  const profile = navigation.getParam("profile");
  useEffect(() => {
    accessNavigation = navigation;
  }, []);

  const {
    email,
    first_name,
    last_name,
    height,
    weight,
    age,
    gender,
    dateOfBirth,
    zip,
    goal_w,
    weekly_goal,
    activity_lvl,
    workouts_per_wk,
    min_per_workout
  } = profile;
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email,
      first_name,
      last_name,
      height,
      weight,
      age,
      gender,
      dateOfBirth,
      zip,
      goal_w,
      weekly_goal,
      activity_lvl,
      workouts_per_wk,
      min_per_workout
    }
  );

  const changeHandler = (text, title) => {
    // console.log(text, title);
    newDetails = userInput;
    newDetails[title] = text;
    setUserInput({ [title]: text });
    // console.log('userInput:', newDetails)
  };

  return (
    <View style={styles.editProfile}>
      <View style={styles.scrollProfile}>
        <ScrollView>
          <EditAccount
            profile={profile}
            userInput={userInput}
            changeHandler={changeHandler}
          />
          <EditPersonalDetails
            profile={profile}
            userInput={userInput}
            changeHandler={changeHandler}
          />
          <EditFitnessGoals
            profile={profile}
            userInput={userInput}
            changeHandler={changeHandler}
          />
          <EditWorkoutPlans profile={profile} changeHandler={changeHandler} />
          <View style={styles.appNameView}>
            <Text style={styles.appName}>Trainer Finder</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const updateDatabase = () => {
  console.log(newDetails);
  const {
    email,
    first_name,
    last_name,
    height,
    weight,
    age,
    gender,
    dateOfBirth,
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
    weight:"${weight}",
    age:${age},
    gender:"${gender}",
    dateOfBirth:"${dateOfBirth}",
    zip:${zip},
    goal_w:"${goal_w}",
    weekly_goal:"${weekly_goal}",
    activity_lvl:"${activity_lvl}",
    workouts_per_wk:${workouts_per_wk},
    min_per_workout:${min_per_workout}
    ) { id } 
  }`;
  console.log("mutation:", mutation);
  axios
    .post("http://192.168.1.20:8070/ct/graphql", { query: mutation })
    .then(() => console.log("database updated"))
    .catch(err => console.error(err));
};

EditProfile.navigationOptions = {
  headerTitle: "Edit Profile",
  headerStyle: {
    backgroundColor: Colors.headerFooter,
    shadowColor: "transparent"
  },
  headerRight: () => (
    <Button
      title="Save"
      color={Colors.orangePink}
      // onPress={() => accessNavigation.navigate({ routeName: "Profile" })}
      onPress={() => updateDatabase()}
    />
  ),
  headerTintColor: Colors.mediumGrey,
  headerTitleStyle: {
    fontSize: 20
  }
};

const styles = StyleSheet.create(editProfileStyle);

export default EditProfile;
