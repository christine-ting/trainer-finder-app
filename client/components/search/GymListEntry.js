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
import { Rating } from "react-native-elements";
import { gymListEntryStyle } from "../../styles/search";
import Colors from "../../styles/profile/colors";
import { TouchableOpacity } from 'react-native-gesture-handler';

const GymListEntry = ({ gym, navigation }) => {

  const clickToViewGymDetails = (id) => {
    navigation.navigate({
      routeName: 'GymDetails',
      params: {
        gymId: id,
        gym
      }
    });
  };

  return (
    <View>
      <View style={styles.listView}>
        <Image style={styles.gymImg} source={{ uri: gym.image }} />
        <TouchableOpacity style={styles.description} onPress={() => clickToViewGymDetails(gym.id)}>
          <View style={styles.gymTextView}>
            <Text style={styles.name}>{gym.name}</Text>
            <Text style={styles.address}>{gym.address}</Text>
          </View>
          <View style={styles.ratingView}>
            <Rating
              imageSize={17}
              readonly
              startingValue={Number(gym.rating)}
              tintColor={Colors.sectionBackground}
            />
            <Text style={styles.numRating}>&nbsp;{gym.num_of_rating}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(gymListEntryStyle);

export default GymListEntry;
