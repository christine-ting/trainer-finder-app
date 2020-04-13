import React, { useReducer } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
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

const steps = [...Array(4).keys()];
const goals = [
  'Lose 0.5 lbs per week',
  'Lose 1 lb per week',
  'Lose 1.5 lbs per week',
  'Lose 2 lbs per week',
  'Maintain weight',
  'Gain 0.5 lbs per week',
  'Gain 1 lb per week'
];
const goalsSelection = goals.map(goal => ({ label: goal, value: goal }));
const levels = ['Not Very Active', 'Lightly Active', 'Active', 'Very Active'];
const levelsSelection = levels.map(level => ({ label: level, value: level }));
const titles = [
  'Current Weight',
  'Goal Weight',
  'Weekly Goal',
  'Activity Level'
];
const dbTitles = ['weight', 'goal_w', 'weekly_goal', 'activity_lvl'];

const AddFitnessGoals = ({ navigation }) => {
  let prevProfile = navigation.getParam('profile');
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      weight: '0 lbs',
      goal_w: '0 lbs',
      weekly_goal: '',
      activity_lvl: ''
    }
  );

  const changeHandler = (text, title) => {
    setUserInput({ [title]: text });
  };

  const nextClickHandler = () => {
    const profile = { ...prevProfile, ...userInput };
    navigation.navigate({
      routeName: 'WorkoutPlans',
      params: {
        profile
      }
    });
  };

  return (
    <View style={styles.addAccount}>
      <View style={styles.steps}>
        {steps.map((step, index) =>
          index === 2 ? (
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
            {title === 'Current Weight' || title === 'Goal Weight' ? (
              <View style={styles.inputView}>
                <TextInput
                  style={styles.addInfoInput}
                  value={userInput[dbTitles[index]].toString()}
                  onChangeText={text => changeHandler(text, dbTitles[index])}
                />
              </View>
            ) : title === 'Weekly Goal' ? (
              <View style={styles.pickerView}>
                <RNPickerSelect
                  onValueChange={value => changeHandler(value, 'weekly_goal')}
                  items={goalsSelection}
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
            ) : (
              <View style={styles.pickerView}>
                <RNPickerSelect
                  onValueChange={value => changeHandler(value, 'activity_lvl')}
                  items={levelsSelection}
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
            )}
          </View>
        ))}
      </View>
      <View style={styles.nextView}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => nextClickHandler()}
        >
          <Text style={{ color: Colors.orangePink }}>Next&nbsp;</Text>
          <Icon
            name='ios-arrow-forward'
            size={15}
            style={{ color: Colors.orangePink, marginTop: 1 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

AddFitnessGoals.navigationOptions = {
  headerTitle: 'Add Fitness Goals',
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

export default AddFitnessGoals;
