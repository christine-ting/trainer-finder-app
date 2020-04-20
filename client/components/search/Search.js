import React, { useState } from "react";
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
import { SearchBar } from "react-native-elements";
import { searchStyle } from "../../styles/search";
import axios from "axios";
import keys from "../../env/key";
import { TouchableOpacity } from "react-native-gesture-handler";
import GymList from "./GymList";

const headerImg = {
  uri:
    "https://mvpuploadimg.s3-us-west-1.amazonaws.com/Screen+Shot+2020-03-09+at+9.10.16+AM.png"
};

const zipcodes = [91765, 90014, 10001, 94102];

const example = [
  {
    address: "255 West 36th Street FL 7, New York",
    hours:
      "Mon 6am-10pm | Tue 6am-10pm | Wed 6am-10pm | Thu 6am-10pm | Fri 6am-10pm | Sat 6am-10pm | Sun 6-8pm",
    image: "http://lorempixel.com/640/480/sports",
    name: "Ronin Athletics - Gracie Jiu Jitsu, Kickboxing, MMA NYC",
    num_of_rating: 125,
    phone: "(540) 675-6033",
    rating: "4.9",
    website: "roninathletics-graciejiujitsu,kickboxing,mmanyc.com"
  },
  {
    address: "78 5th Avenue 4th Floor, New York",
    hours:
      "Mon 6am-10pm | Tue 6am-10pm | Wed 6am-10pm | Thu 6am-10pm | Fri 6am-10pm | Sat 6am-10pm | Sun 6-8pm",
    image: "http://lorempixel.com/640/480/sports",
    name: "Pure Barre",
    num_of_rating: 15,
    phone: "(818) 220-7160",
    rating: "4.3",
    website: "purebarre.com"
  }
];

const Search = () => {
  const [text, searchText] = useState("");
  const [gyms, updateGyms] = useState(example);
  const [isLoading, loadData] = useState(true);

  const getGymDetails = zip => {
    const query = `
    {
      gyms(zip:${zip}) {
        name
        address
        website
        hours
        image
        phone
        num_of_rating
        rating
      }
    }`;
    axios
      .post("http://192.168.1.20:8070/ct/graphql", { query })
      .then(result => {
        gymInfo = result.data.data.gyms;
        updateGyms(gymInfo);
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
      <View style={styles.header}>
        <Text style={styles.headerText}>Find a Gym</Text>
      </View>
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
      {/* { isLoading && text !== '' ? (
          <ActivityIndicator/>
        ) : ( */}
      <ScrollView>
        <TouchableWithoutFeedback
          onPress={() => Keyboard.dismiss()}
          accessible={false}
        >
          <GymList gyms={gyms} />
        </TouchableWithoutFeedback>
      </ScrollView>
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create(searchStyle);

export default Search;
