import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { gymListEntryStyle } from "../../styles/search";


const GymListEntry = ({ gym }) => {
  return (
    <View>
      <View style={styles.listView}>
        <Image style={styles.gymImg} source={{ uri: gym.image }} />
        <View>
          <Text>{gym.name}</Text>
          <Text>{gym.address}</Text>
          <Text>{gym.rating}</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create(gymListEntryStyle);

export default GymListEntry;