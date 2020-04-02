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
  const titles = [['Height', 'Gender'], ['Weight', 'Date of Birth'], ['Age', 'Zip Code']];
  const dbTitles = [['height', 'gender'], ['weight', 'dateOfBirth'], ['age', 'zip']];

  return (
    <View style={styles.personalDetails}>
      { titles.map((title, index) => (
        <View style={styles.column} key={index}>
          <View style={styles.entry}>
            <Text style={styles.itemsTitle}>{title[0]}</Text>
            <Text style={styles.itemsText}>{profile[dbTitles[index][0]]}</Text>
          </View>
          <View style={styles.entry}>
            <Text style={styles.itemsTitle}>{title[1]}</Text>
            <Text style={styles.itemsText}>{profile[dbTitles[index][1]]}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  personalDetails: {
    backgroundColor: 'rgb(62,69,73)',
    paddingHorizontal: 50,
    paddingBottom: 15,
    paddingTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: 'rgb(230,94,80)',
    borderBottomWidth: 1
  },
  column: {
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    // padding: 10,
    paddingHorizontal: 20,
  },
  entry: {
    // paddingTop: 5
  },
  itemsTitle: {
    color: 'rgb(190,190,190)'
  },
  itemsText: {
    color: 'rgb(240,240,240)',
    paddingTop: 8,
    paddingBottom: 15,
    marginLeft: 3
  }
});

export default PersonalDetails;
