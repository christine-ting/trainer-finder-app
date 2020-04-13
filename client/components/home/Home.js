import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { homeStyle } from '../../styles/home';
import { Linking } from 'expo';

const findAGymImg = {
  uri: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/gym3.jpg'
};
const ultimateWorkoutImg = {
  uri:
    'https://mvpuploadimg.s3-us-west-1.amazonaws.com/Screen+Shot+2020-04-13+at+12.15.30+PM.png'
};
const weightImg = {
  uri: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/weightTraining.jpg'
};
const absImg = {
  uri: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/absWorkout.jpg'
};
const dietImg = {
  uri: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/diet.jpg'
};

const Home = ({ navigation }) => {
  const clickHandler = term => {
    if (term === 'search') {
      navigation.navigate({
        routeName: 'Search'
      });
    }
    if (term === 'full') {
      Linking.openURL('https://www.youtube.com/watch?v=9TDuy9Tw9pA');
    }
    if (term === 'weight') {
      Linking.openURL('https://www.youtube.com/watch?v=TdUlF4F2nto');
    }
    if (term === 'abs') {
      Linking.openURL('https://www.youtube.com/watch?v=8AAmaSOSyIA');
    }
    if (term === 'diet') {
      Linking.openURL(
        'https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20045506'
      );
    }
  };

  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Trainer Finder</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity
          style={styles.sectionView}
          onPress={() => clickHandler('search')}
        >
          <ImageBackground source={findAGymImg} style={styles.image}>
            <Text style={styles.title}>Find a Gym</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectionView}
          onPress={() => clickHandler('full')}
        >
          <ImageBackground source={ultimateWorkoutImg} style={styles.image}>
            <Text style={styles.title}>Full Body Workout</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectionView}
          onPress={() => clickHandler('weight')}
        >
          <ImageBackground source={weightImg} style={styles.image}>
            <Text style={styles.title}>Weight Training</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectionView}
          onPress={() => clickHandler('abs')}
        >
          <ImageBackground source={absImg} style={styles.image}>
            <Text style={styles.title}>Abs Workout</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectionView}
          onPress={() => clickHandler('diet')}
        >
          <ImageBackground source={dietImg} style={styles.image}>
            <Text style={styles.title}>Workout Diet</Text>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create(homeStyle);

export default Home;
