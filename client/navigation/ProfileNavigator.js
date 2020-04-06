import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ProfilePage from '../components/ProfilePage';
import EditProfile from '../components/EditProfile';

const ProfileNavigator = createStackNavigator({
  Profile: ProfilePage,
  EditMode: EditProfile
});

export default createAppContainer(ProfileNavigator);