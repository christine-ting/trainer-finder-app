import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground } from 'react-native';
import axios from 'axios';
import Profile from './Profile';
import Footer from './Footer';
import Icon from 'react-native-vector-icons/Feather';


const App = () => {
  // const [name, setName] = useState('useEffect() in hooks');
  const [fontLoaded, loadFont] = useState(false);
  const profile = {
    id: 0,
    email: 'christine@yahoo.com',
    first_name: 'Christine',
    last_name: 'Ting',
    height: '5\'5"',
    weight: '130 lbs',
    age: 27,
    gender: 'Female',
    dateOfBirth: '12/25/1992',
    zip: 90045,
    goal_w: '120 lbs',
    weekly_goal: 'Lose 0.5 lbs per week',
    activity_lvl: 'Active',
    workouts_per_wk: 3,
    min_per_workout: 60,
    image: { uri: 'https://mvpuploadimg.s3.amazonaws.com/uploads%2F70C0AD5A-EDF0-4564-9C6F-F9B0883F35D4.jpg' }
  };
  // useEffect(() => {
  //   // Using an IIFE
  //   const someFunc = async () => {
  //     const result = await Expo.Font.loadAsync({
  //       'pixel-font': require('../assets/fonts/Allan\-Regular.ttf'),
  //     });
  //   }
      
  //   loadFont(true);
  //   }, []);

  async function loadmyFont() {
    let response = await Expo.Font.loadAsync({
      'pixel-font': require('../assets/fonts/Muli\-Bold.ttf'),
    });
    loadFont(true);
  };

  useEffect(() => {
    loadmyFont();
  }, []);


  // useEffect(() => {
  //   loadData();
  // }, [])

  // const loadData = () => {
  //   const query = `
  //   {
  //     profiles(id:0) {
  //       username
  //       first_name
  //       last_name
  //       height
  //       weight
  //       age
  //       gender
  //       dob
  //       zip
  //       current_w
  //       goal_w
  //       weekly_goal
  //       activity_lvl
  //       workouts_per_wk
  //       min_per_workout
  //       image
  //     }
  //   }`;
  //   axios
  //     .post('http://192.168.1.14:8070/ct/graphql', { query })
  //     .then((result) => setName(result.data.data.profiles[0].first_name))
  //     .catch(err => console.error(err));
  // }


  return (
    <View style={styles.profilePage}>
        {
          fontLoaded ? (
            <View style={styles.headerView}>
              <Text style={styles.headerText}>{profile.first_name} {profile.last_name}</Text>
              <Icon name="edit" size={25} color="black" style={styles.editIcon} />
            </View>
          ) : null
        }
      <View style={styles.scrollProfile}>
        <ScrollView>
          <Profile profile={profile}/>
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePage: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'rgb(37,44,48)'
  },
  scrollProfile: {
    flex: 20
  },
  headerView: {
    flex: 3,
    flexDirection: 'row',
    // paddingTop: 50,
    // paddingBottom: 3,
    // paddingLeft: 20,
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(32,39,43)'
  },
  headerText: {
    fontSize: 22,
    color: 'rgb(240,240,240)',
    fontWeight: 'bold',
    fontFamily: 'pixel-font',
    marginLeft: 20,
    marginBottom: 10
  },
  editIcon: {
    color: 'rgb(220,220,220)',
    marginRight: 10,
    marginBottom: 10
  },
  footerContainer: {
    flex: 2.5,
    // justifyContent: 'center'
    backgroundColor: 'rgb(32,39,43)',
    paddingTop: 7 
  }
});

export default App;
// export default class App extends React.Component {
//   state = {
//     fontLoaded: false,
//   }
//   async componentWillMount() {
//     await Expo.Font.loadAsync({
//       'pixel-font': require('../assets/fonts/Allan\-Regular.ttf'),
//     });
//     this.setState({ fontLoaded: true });
//   }
//   render() {
//     return (
//       <View>
//         {
//           this.state.fontLoaded ? (
//             <Text style={{ fontFamily: 'pixel-font', fontSize: 56 }}>
//               Hello, world!
//             </Text>
//           ) : null
//         }
//       </View>
//     )
//   }
// }