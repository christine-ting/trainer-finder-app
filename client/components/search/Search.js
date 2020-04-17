import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { searchStyle } from '../../styles/search';
import zipcodes from 'zipcodes';
import axios from 'axios';
import keys from '../../env/key';

const Search = () => {
  const [text, searchText] = useState('');
  // var hills = zipcodes.lookup(90210);
  // console.log(hills);
  // axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${hills.latitude},${hills.longitude}&radius=500&type=restaurant&key=${keys.googleAPI}`)
  //   .then((response) => console.log(response.data))
  //   .catch((err) => console.error(err));
  return (
    <View style={styles.search}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Find a Gym</Text>
      </View>
      <View>
        <SearchBar
          placeholder="Enter zip code"
          onChangeText={(text) => searchText(text)}
          value={text}
          containerStyle={styles.search}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create(searchStyle);

export default Search;