import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import GymListEntry from './GymListEntry';

const GymList = ({ gyms }) => {
  return (
    <View>
      { gyms.map((gym, index) => (
        <GymListEntry key={index} gym={gym}/>
      )) }
    </View>
  );
};

export default GymList;