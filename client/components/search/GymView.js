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

const GymView = ({ navigation }) => {
  const gymId = navigation.getParam('gymId');
  console.log(gymId)

  return (
    <Text>gym view</Text>
  );
};

export default GymView;