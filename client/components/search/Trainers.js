import React, { useState, useEffect } from "react";
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
import axios from 'axios';
import Trainer from './Trainer';
import { trainersStyle } from "../../styles/search";


const Trainers = ({ gymId }) => {
  const [trainers, updateTrainers] = useState([]);



  const getTrainerData = () => {
    const query = `
    {
      trainers(trainer_id:1) {
        trainer_id
        first_name
        last_name
        specialties
        image
        price
        num_of_rating
        rating
      }
    }`;
    axios
      .post("http://192.168.1.3:8070/ct/graphql", { query })
      .then(result => {
        trainersInfo = result.data.data.trainers;
        updateTrainers(trainersInfo);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getTrainerData();
  }, []);

  return (
    <View style={styles.trainersView}>
      { trainers.map((trainer, index) => <Trainer trainer={trainer} key={index}/>) }
    </View>
  );
};


const styles = StyleSheet.create(trainersStyle);

export default Trainers;