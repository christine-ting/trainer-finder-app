import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { footerStyle } from '../styles';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.icon}>
        <Icon name="home" size={25} color="whitesmoke" />
        <Text style={{color: 'white'}}>Home</Text>
      </View>
      <View style={styles.icon}>
        <Icon name="search1" size={25} color="whitesmoke" />
        <Text style={{color: 'white'}}>Search</Text>
      </View>
      <View style={styles.icon}>
        <Icon name="user" size={25} color="whitesmoke" />
        <Text style={{color: 'white'}}>Profile</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create(footerStyle);

export default Footer;