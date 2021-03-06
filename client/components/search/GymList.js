import React from 'react';
import { View } from 'react-native';
import GymListEntry from './GymListEntry';

const GymList = ({ gyms, navigation }) => {
  return (
    <View>
      {gyms.map((gym, index) => (
        <GymListEntry key={index} gym={gym} navigation={navigation} />
      ))}
    </View>
  );
};

export default GymList;
