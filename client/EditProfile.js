import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import Colors from './constants/Colors';
import Footer from './Footer';

let accessNavigation;

const EditProfile = ({ navigation }) => {

  useEffect(() => {
    // loadmyFont();
    accessNavigation = navigation;
  }, []);

  return (
    <View style={styles.editProfile}>
      <View style={styles.scrollProfile}>
        <ScrollView >
          <Text>details</Text>
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
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
      color={Colors.lightGrey}
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
    flex: 1
  },
  scrollProfile: {
    flex: 0.9
  },  
  footerContainer: {
    flex: 0.1,
    // justifyContent: 'center'
    backgroundColor: Colors.headerFooter,
    paddingTop: 7,
    bottom: 0
  }
});
export default EditProfile;