import React, { useState, useEffect } from "react";
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
import { trainerStyle } from "../../styles/search";
import Colors from "../../styles/profile/colors";

const Trainer = ({ trainer }) => {
  return (
    <View style={styles.trainerView}>
      <Image style={styles.trainerImg} source={{ uri: trainer.image }} />
      <View style={styles.trainerDetails}>
        <View style={styles.ratingView}>
          <Rating
            imageSize={13}
            readonly
            startingValue={Number(trainer.rating)}
            tintColor={Colors.background}
          />
          <Text style={styles.numRating}>&nbsp;{trainer.num_of_rating}</Text>
        </View>
        <Text style={styles.name}>
          {trainer.first_name} {trainer.last_name}
        </Text>
        <Text style={styles.specialties}>{trainer.specialties}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(trainerStyle);

export default Trainer;
