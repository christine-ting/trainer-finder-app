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

const GymListEntry = ({ gym }) => {
  return (
    <TouchableOpacity>
      <View style={styles.listView}>
        <Image style={styles.gymImg} source={{ uri: gym.image }} />
        <View style={styles.description}>
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
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create(gymListEntryStyle);

export default GymListEntry;
