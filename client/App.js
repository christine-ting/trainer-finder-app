import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground } from 'react-native';
import axios from 'axios';
import Profile from './Profile';
import Footer from './Footer';

const backgroundimg = { uri: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/concrete.jpg' }

const App = () => {
  // const [name, setName] = useState('useEffect() in hooks');
  const profile = {
    id: 0,
    email: 'christine@yahoo.com',
    first_name: 'Christine',
    last_name: 'Ting',
    height: '5/5',
    weight: '130 lbs',
    age: 27,
    gender: 'Female',
    dateOfBirth: '12/25/1992',
    zip: 90045,
    goal_w: '120 lbs',
    weekly_goal: 'Lose 0.5 lbs per week',
    activity_lvl: 'Active',
    workouts_per_wk: 3,
    min_per_workout: 60,
    image: { uri: 'https://mvpuploadimg.s3.amazonaws.com/uploads%2F70C0AD5A-EDF0-4564-9C6F-F9B0883F35D4.jpg' }
  };

  // useEffect(() => {
  //   loadData();
  // }, [])

  // const loadData = () => {
  //   const query = `
  //   {
  //     profiles(id:0) {
  //       username
  //       first_name
  //       last_name
  //       height
  //       weight
  //       age
  //       gender
  //       dob
  //       zip
  //       current_w
  //       goal_w
  //       weekly_goal
  //       activity_lvl
  //       workouts_per_wk
  //       min_per_workout
  //       image
  //     }
  //   }`;
  //   axios
  //     .post('http://192.168.1.14:8070/ct/graphql', { query })
  //     .then((result) => setName(result.data.data.profiles[0].first_name))
  //     .catch(err => console.error(err));
  // }


  return (
    <View style={styles.profilePage}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>{profile.first_name}'s Profile</Text>
        </View>
      <ImageBackground source={backgroundimg} style={styles.backgroundimg}>
      <View style={styles.scrollProfile}>
        <ScrollView>
          <Profile profile={profile}/>
        </ScrollView>
      </View>
      </ImageBackground>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePage: {
    backgroundColor: 'rgb(80,80,80)',
    flexDirection: 'column',
    height: '100%',
  },
  scrollProfile: {
    flex: 20
  },
  headerView: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    backgroundColor: 'rgb(80,80,80)'
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  backgroundimg: {
    width: '100%',
    flex: 20
  },
  footerContainer: {
    flex: 2.5,
    // justifyContent: 'center'
    // backgroundColor: 'black',
    paddingTop: 7 
  }
});

export default App;
