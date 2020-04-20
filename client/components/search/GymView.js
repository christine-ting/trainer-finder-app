import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  ActivityIndicator
} from "react-native";
import GymDetails from './GymDetails';
import Trainers from './Trainers';
import { Rating } from "react-native-elements";
import Colors from "../../styles/profile/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { gymViewStyle } from "../../styles/search";
import LocIcon from "react-native-vector-icons/Entypo";
import PhoneIcon from "react-native-vector-icons/FontAwesome";
import WebIcon from "react-native-vector-icons/MaterialCommunityIcons";
import HoursIcon from "react-native-vector-icons/Feather";

const GymView = ({ navigation }) => {
  const gymId = navigation.getParam("gymId");
  const gym = navigation.getParam("gym");

  return (
    <ScrollView style={styles.gymView}>
      <Image style={styles.gymImg} source={{ uri: gym.image }} />
      <View style={styles.topSection}>
        <View style={styles.ratingView}>
          <Rating
            imageSize={17}
            readonly
            startingValue={Number(gym.rating)}
            tintColor={Colors.background}
          />
          <Text style={styles.numRating}>{gym.num_of_rating}</Text>
        </View>
        <Text style={styles.name}>{gym.name}</Text>
      </View>
      <Text style={styles.title}>DETAILS</Text>
      <GymDetails gym={gym}/>
      <Text style={styles.title}>TRAINERS</Text>
      <Trainers gymId={gym.id}/>
    </ScrollView>
  );
};

GymView.navigationOptions = {
  headerTitle: "Gym Details",
  headerStyle: {
    backgroundColor: Colors.headerFooter,
    shadowColor: "transparent"
  },
  headerTintColor: Colors.lightGrey,
  headerTitleStyle: {
    fontSize: 20
  }
};

const styles = StyleSheet.create(gymViewStyle);

export default GymView;
