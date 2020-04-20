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
import Colors from "../../styles/profile/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { gymDetailsStyle } from "../../styles/search";
import LocIcon from "react-native-vector-icons/Entypo";
import PhoneIcon from "react-native-vector-icons/FontAwesome";
import WebIcon from "react-native-vector-icons/MaterialCommunityIcons";
import HoursIcon from "react-native-vector-icons/Feather";

const GymDetails = ({ gym }) => {
  return (
    <View style={styles.detailsView}>
      <View style={styles.details}>
        <LocIcon name='location' size={15} style={styles.icons} />
        <View style={styles.sectionView}>
          <View style={styles.sectionTitleView}>
            <Text style={styles.sectionTitle}>Address</Text>
          </View>
          <Text style={styles.text}>{gym.address}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <PhoneIcon name='phone' size={15} style={styles.icons} />
        <View style={styles.sectionView}>
          <View style={styles.sectionTitleView}>
            <Text style={styles.sectionTitle}>Phone</Text>
          </View>
          <Text style={styles.text}>{gym.phone}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <WebIcon name='web' size={15} style={styles.icons} />
        <View style={styles.sectionView}>
          <View style={styles.sectionTitleView}>
            <Text style={styles.sectionTitle}>Website</Text>
          </View>
          <Text style={styles.text}>{gym.website}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <HoursIcon name='clock' size={15} style={styles.icons} />
        <View style={styles.sectionView}>
          <View style={styles.sectionTitleView}>
            <Text style={styles.sectionTitle}>Hours</Text>
          </View>
          {gym.hours.split(" | ").map((hours, index) => (
            <Text key={index} style={styles.text}>
              {hours}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(gymDetailsStyle);

export default GymDetails;
