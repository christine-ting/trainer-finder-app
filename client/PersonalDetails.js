import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ImageBackground
} from "react-native";

const PersonalDetails = ({ profile }) => {
  const title = ["Height", "Weight", "Age", "Gender", "DOB", "Zip Code"];
  const dbTitle = ["height", "weight", "age", "gender", "dateOfBirth", "zip"];
  return (
    <View style={styles.personalDetails}>
      {title.map((title, index) => (
        <View key={index}>
          <Text>{title}</Text>
          {dbTitle[index] === "height" ? (
            <Text>
              {profile[dbTitle[index]].split("/")[0]}ft{" "}
              {profile[dbTitle[index]].split("/")[1]}in
            </Text>
          ) : (
            <Text>{profile[dbTitle[index]]}</Text>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  personalDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'lightsalmon',
    opacity: 0.6,
    padding: 10,
    width: '90%',
    borderRadius: 700 / 70,
    marginTop: 20,
    flexWrap: 'wrap'
  }
});

export default PersonalDetails;
