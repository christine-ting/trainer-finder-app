import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Colors from '../../styles/profile/colors';
import { searchStyle } from '../../styles/search';
import axios from 'axios';
import GymList from './GymList';

const headerImg = {
  uri: 'https://mvpuploadimg.s3-us-west-1.amazonaws.com/searchimg.png'
};

const zipcodes = [91765, 90014, 10001, 94102];

const Search = ({ navigation }) => {
  const [text, searchText] = useState('');
  const [gyms, updateGyms] = useState([]);
  const [isLoading, loadData] = useState(true);

  const getGymDetails = (zip) => {
    const query = `
    {
      gyms(zip:${zip}) {
        id
        name
        address
        website
        hours
        image
        phone
        price
        num_of_rating
        rating
      }
    }`;
    axios
      .post('http://192.168.1.3:8070/ct/graphql', { query })
      .then(result => {
        gymInfo = result.data.data.gyms;
        updateGyms(gymInfo);
        Keyboard.dismiss();
      })
      .catch(err => console.error(err));
  };

  const searchHandler = text => {
    searchText(text);
    const zipcode = Number(text);
    if (zipcodes.includes(zipcode)) {
      loadData(false);
      getGymDetails(zipcode);
    } else {
      loadData(true);
    }
  };

  return (
    <View style={styles.search}>
      <Image style={styles.headerImg} source={headerImg} />
      <View style={styles.searchView}>
        <SearchBar
          placeholder='Enter zip code'
          onChangeText={text => searchHandler(text)}
          value={text}
          containerStyle={styles.searchBar}
          keyboardType='numeric'
        />
      </View>
      {isLoading && text !== '' ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <GymList gyms={gyms} navigation={navigation} />
        </ScrollView>
      )}
    </View>
  );
};

Search.navigationOptions = {
  headerTitle: 'Find a Gym',
  headerStyle: {
    backgroundColor: Colors.headerFooter,
    shadowColor: 'transparent'
  },
  headerTintColor: Colors.lightGrey,
  headerTitleStyle: {
    fontSize: 20
  }
};

const styles = StyleSheet.create(searchStyle);

export default Search;
