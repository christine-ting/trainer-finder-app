import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { homeStyle } from '../../styles/profile';

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Trainer Finder</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(homeStyle);

export default Home;