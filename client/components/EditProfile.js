import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import Colors from './constants/Colors';
import EditAccount from './EditAccount';
import EditPersonalDetails from './EditPersonalDetails';
import EditFitnessGoals from './EditFitnessGoals';
import EditWorkoutPlans from './EditWorkoutPlans';

let accessNavigation;

const EditProfile = ({ navigation }) => {
  const profile = navigation.getParam('profile');
  useEffect(() => {
    accessNavigation = navigation;
  }, []);

  return (
    <View style={styles.editProfile}>
      <View style={styles.scrollProfile}>
        <ScrollView>
          <EditAccount profile={profile}/>
          <EditPersonalDetails profile={profile}/>
          <EditFitnessGoals profile={profile}/>
          <EditWorkoutPlans profile={profile}/>
          <View style={styles.appNameView}>
            <Text style={styles.appName}>Trainer Finder</Text>
          </View>
        </ScrollView>
      </View>   
    </View>
  )
}

EditProfile.navigationOptions = {
  headerTitle: "Edit Profile",
  headerStyle: {
    backgroundColor: Colors.headerFooter,
    shadowColor: 'transparent'
  },
  headerRight: () => (
    <Button
      title="Save"
      color={Colors.orangePink}
      onPress={() => accessNavigation.navigate({ routeName: "Profile" })}
    />
  ),
  headerTintColor: Colors.mediumGrey,
  headerTitleStyle: {
    fontSize: 20
  }
};

const styles = StyleSheet.create({
  editProfile: {
    flexDirection: "column",
    height: "100%",
    backgroundColor: Colors.background,
    flex: 1,
    paddingBottom: 20
  },
  appNameView: {
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  appName: {
    color: Colors.mediumGrey,
    fontSize: 17
  }
});
export default EditProfile;