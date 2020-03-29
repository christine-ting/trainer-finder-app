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
        <View style={styles.row} key={index}>
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
    backgroundColor: 'rgb(132,148,164)',
    padding: 10,
    width: '90%',
    borderRadius: 700 / 150,
    flexWrap: 'wrap'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  }
});

export default PersonalDetails;
