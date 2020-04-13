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

const categories = {
  search: {
    image: { uri: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/gym3.jpg' }
  },
  full: {
    image: {
      uri:
        'https://mvpuploadimg.s3-us-west-1.amazonaws.com/Screen+Shot+2020-04-13+at+12.15.30+PM.png'
    },
    link: 'https://www.youtube.com/watch?v=9TDuy9Tw9pA'
  },
  weight: {
    image: {
      uri: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/weightTraining.jpg'
    },
    link: 'https://www.youtube.com/watch?v=TdUlF4F2nto'
  },
  abs: {
    image: {
      uri: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/absWorkout.jpg'
    },
    link: 'https://www.youtube.com/watch?v=8AAmaSOSyIA'
  },
  diet: {
    image: { uri: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/diet.jpg' },
    link:
      'https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20045506'
  }
};

const titles = [
  'Find A Gym',
  'Full Body Workout',
  'Weight Training',
  'Abs Workout',
  'Workout Diet'
];

const Home = ({ navigation }) => {
  const clickHandler = term => {
    if (term === 'search') {
      navigation.navigate({
        routeName: 'Search'
      });
    } else {
      let url = categories[term].link;
      Linking.openURL(url);
    }
  };

  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Trainer Finder</Text>
      </View>
      <ScrollView style={styles.scroll}>
        {Object.keys(categories).map((key, index) => (
          <TouchableOpacity
            style={styles.sectionView}
            onPress={() => clickHandler(key)}
            key={index}
          >
            <ImageBackground
              source={categories[key].image}
              style={styles.image}
            >
              <Text style={styles.title}>{titles[index]}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create(homeStyle);

export default Home;
