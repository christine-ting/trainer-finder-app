import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { searchStyle } from '../../styles/profile';

const Search = () => {
  return (
    <View style={styles.search}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Find a Gym</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(searchStyle);

export default Search;