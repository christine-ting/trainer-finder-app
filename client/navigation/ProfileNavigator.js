import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ProfilePage from '../ProfilePage';
import EditProfile from '../EditProfile';

const ProfileNavigator = createStackNavigator({
  Profile: ProfilePage,
  EditMode: EditProfile
});

export default createAppContainer(ProfileNavigator);