import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import ProfilePage from '../components/profile/ProfilePage';
import EditProfile from '../components/profile/EditProfile';
import Home from '../components/home/Home';
import Search from '../components/search/Search';

const ProfileNavigator = createStackNavigator({
  Profile: ProfilePage,
  EditMode: EditProfile
});

const HomeSearchProfileNavigator = createBottomTabNavigator({
  Home: Home,
  Search: Search
});

export default createAppContainer(ProfileNavigator);