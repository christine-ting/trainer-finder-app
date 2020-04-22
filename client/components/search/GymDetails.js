import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { gymDetailsStyle } from '../../styles/search';
import LocIcon from 'react-native-vector-icons/Entypo';
import PhoneIcon from 'react-native-vector-icons/FontAwesome';
import WebIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HoursIcon from 'react-native-vector-icons/Feather';
import PriceIcon from 'react-native-vector-icons/FontAwesome';

const icons = [LocIcon, PhoneIcon, WebIcon, PriceIcon];
const iconNames = ['location', 'phone', 'web', 'dollar'];
const titles = ['Address', 'Phone', 'Website', 'Price'];

const GymDetails = ({ gym }) => {
  return (
    <View style={styles.detailsView}>
      { icons.map((Icon, index) => (
        <View style={styles.details} key={index}>
          <Icon name={iconNames[index]} size={15} style={styles.icons} />
          <View style={styles.sectionView}>
            <View style={styles.sectionTitleView}>
              <Text style={styles.sectionTitle}>{titles[index]}</Text>
            </View>
            <Text style={styles.text}>{gym[titles[index].toLowerCase()]}</Text>
          </View>
        </View>
      )) }
      <View style={styles.details}>
        <HoursIcon name='clock' size={15} style={styles.icons} />
        <View style={styles.sectionView}>
          <View style={styles.sectionTitleView}>
            <Text style={styles.sectionTitle}>Hours</Text>
          </View>
          {gym.hours.split(' | ').map((hours, index) => (
            <Text key={index} style={styles.text}>
              {hours}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(gymDetailsStyle);

export default GymDetails;
