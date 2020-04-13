import React, { useReducer } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Colors from '../../styles/profile/colors';
import { addAccountStyle } from '../../styles/profile';
import Icon from 'react-native-vector-icons/Ionicons';
import SolidCircle from 'react-native-vector-icons/FontAwesome';
import VoidCircle from 'react-native-vector-icons/FontAwesome';
import ArrowIcon from 'react-native-vector-icons/Octicons';
import { pickerStyle } from '../../styles/profile/common';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';


const steps = [...Array(4).keys()];
const weekly_workouts = [...Array(29).keys()];
const weeklyWorkoutsSelection = weekly_workouts.map(workout => ({
  label: workout.toString(),
  value: workout.toString()
}));
const workout_min = [...Array(361).keys()];
const workoutMinSelection = workout_min.map(min => ({
  label: min.toString(),
  value: min.toString()
}));
const selections = [weeklyWorkoutsSelection, workoutMinSelection];
const titles = ['Workouts/Week', 'Minutes/Workout'];
const dbTitles = ['workouts_per_wk', 'min_per_workout'];

const AddWorkoutPlans = ({ navigation }) => {
  let prevProfile = navigation.getParam('profile');
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      workouts_per_wk: '',
      min_per_workout: ''
    }
  );

  const changeHandler = (text, title) => {
    setUserInput({ [title]: text });
  };

  const nextClickHandler = () => {
    const profile = { ...prevProfile, ...userInput };
    console.log(profile);
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
    } = profile;
    const mutation = `
    mutation addUser {
      addUser(
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
      profile_pic: "https://mvpuploadimg.s3-us-west-1.amazonaws.com/question-mark-background-bigalbaloo-stock.jpg",
      cover_photo: "https://mvpuploadimg.s3-us-west-1.amazonaws.com/question-mark-background-bigalbaloo-stock.jpg"
      ) { email } 
    }`;
    axios
      .post('http://192.168.1.20:8070/ct/graphql', { query: mutation })
      .then(() => {
        navigation.navigate({
          routeName: 'Profile',
          params: {
            email
          }
        });
      })
      .catch(err => console.error(err));
  };

  return (
    <View style={styles.addAccount}>
      <View style={styles.steps}>
        {steps.map((step, index) =>
          index === 3 ? (
            <SolidCircle
              name="circle"
              size={11}
              style={{ color: Colors.orangePink, paddingLeft: 5 }}
              key={index}
            />
          ) : (
            <VoidCircle
              name="circle-o"
              size={10}
              style={{ color: Colors.mediumGrey, paddingLeft: 5 }}
              key={index}
            />
          )
        )}
      </View>
      <View style={styles.addAccountBox}>
        {titles.map((title, index) => (
          <View style={styles.rowView} key={index}>
            <Text style={styles.addText}>{title}: </Text>
            <View style={styles.pickerView}>
              <RNPickerSelect
                onValueChange={value => changeHandler(value, dbTitles[index])}
                items={selections[index]}
                placeholder={{
                  value: 'Select',
                  displayValue: true,
                  key: 'Select'
                }}
                useNativeAndroidPickerStyle={true}
                style={pickerStyle}
              />
              <Text>&nbsp;</Text>
              <ArrowIcon
                name="triangle-down"
                size={15}
                color={Colors.orangePink}
              />
            </View>
          </View>
        ))}
      </View>
      <View style={styles.nextView}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => nextClickHandler()}
        >
          <Text style={{ color: Colors.orangePink }}>Submit&nbsp;</Text>
          <Icon
            name="ios-arrow-forward"
            size={15}
            style={{ color: Colors.orangePink, marginTop: 1 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

AddWorkoutPlans.navigationOptions = {
  headerTitle: 'Add Workout Plans',
  headerStyle: {
    backgroundColor: Colors.headerFooter,
    shadowColor: 'transparent'
  },
  headerTintColor: Colors.lightGrey,
  headerTitleStyle: {
    fontSize: 20
  }
};

const styles = StyleSheet.create(addAccountStyle);

export default AddWorkoutPlans;
