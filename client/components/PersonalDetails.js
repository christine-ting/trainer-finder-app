import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { blockStyle } from '../styles';

const PersonalDetails = ({ profile }) => {
  const titles = [
    ['Height', 'Gender'],
    ['Weight', 'Date of Birth'],
    ['Age', 'Zip Code']
  ];
  const dbTitles = [
    ['height', 'gender'],
    ['weight', 'date_of_birth'],
    ['age', 'zip']
  ];

  return (
    <View style={styles.main}>
      {titles.map((title, index) => (
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

const styles = StyleSheet.create(blockStyle);

export default PersonalDetails;
