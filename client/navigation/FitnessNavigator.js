import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import ProfilePage from '../components/profile/ProfilePage';
import EditProfile from '../components/profile/EditProfile';
import Home from '../components/home/Home';
import Search from '../components/search/Search';
import Colors from '../styles/profile/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';

const ProfileNavigator = createStackNavigator({
  Profile: ProfilePage,
  EditMode: EditProfile
});

const HomeSearchProfileNavigator = createBottomTabNavigator({
  Home: { screen: Home, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return (<Icon name="home" size={23} color={tabInfo.tintColor} />);
    }
  }},
  Search: {screen: Search, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return (<Icon name="search1" size={25} color={tabInfo.tintColor} />);
    }
  }},
  Profile: {screen: ProfileNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return (<Icon name="user" size={25} color={tabInfo.tintColor} />);
    }
  }}
}, {
  tabBarOptions: {
    activeTintColor: Colors.orangePink,
    inactiveTintColor: Colors.lightGrey,
    labelStyle: {
      fontSize: 12,
    },
    tabStyle: {
      width: 100,
      marginTop: 10,
      marginBottom: -7
    },
    activeTabStyle: {
      backgroundColor: Colors.orangePink,
      borderBottomColor: 'white',
      borderBottomWidth: 2
    },
    style: {
      backgroundColor: Colors.headerFooter,
      borderTopColor: 'transparent'
    },
    indicatorStyle: {
      borderBottomColor: 'yellow',
      borderBottomWidth: 2
    }
  }
});

export default createAppContainer(HomeSearchProfileNavigator);