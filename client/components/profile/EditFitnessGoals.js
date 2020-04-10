import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import EditIcon from 'react-native-vector-icons/Feather';
import ArrowIcon from 'react-native-vector-icons/Octicons';
import RNPickerSelect from 'react-native-picker-select';
import Colors from '../../styles/profile/colors';
import { editContainerStyle } from '../../styles/profile';
import { pickerStyle } from '../../styles/profile/common';

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

const EditFitnessGoals = ({ profile, userInput, changeHandler }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>FITNESS GOALS</Text>
      <View style={styles.details}>
        {titles.map((title, index) => (
          <View key={index}>
            <View style={styles.row}>
              <Text style={styles.item}>{title}</Text>
              {title === 'Current Weight' || title === 'Goal Weight' ? (
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.info}
                    value={userInput[dbTitles[index]].toString()}
                    onChangeText={text => changeHandler(text, dbTitles[index])}
                  />
                  <Text>&nbsp;</Text>
                  <EditIcon name="edit-2" size={15} color={Colors.orangePink} />
                </View>
              ) : title === 'Weekly Goal' ? (
                <View style={styles.inputView}>
                  <RNPickerSelect
                    onValueChange={value => changeHandler(value, 'weekly_goal')}
                    items={goalsSelection}
                    placeholder={{
                      value: `${profile.weekly_goal}`,
                      displayValue: true,
                      key: `${profile.weekly_goal}`
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
                <View style={styles.inputView}>
                  <RNPickerSelect
                    onValueChange={value =>
                      changeHandler(value, 'activity_lvl')
                    }
                    items={levelsSelection}
                    placeholder={{
                      value: `${profile.activity_lvl}`,
                      displayValue: true,
                      key: `${profile.activity_lvl}`
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
            <View style={styles.line} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create(editContainerStyle);

export default EditFitnessGoals;
