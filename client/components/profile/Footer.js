import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { footerStyle } from '../../styles/profile';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.icon}>
        <Icon name="home" size={23} color="whitesmoke" />
        <Text style={styles.footerText}>Home</Text>
      </View>
      <View style={styles.icon}>
        <Icon name="search1" size={25} color="whitesmoke" />
        <Text style={styles.footerText}>Search</Text>
      </View>
      <View style={styles.icon}>
        <Icon name="user" size={25} color="whitesmoke" />
        <Text style={styles.footerText}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(footerStyle);

export default Footer;
