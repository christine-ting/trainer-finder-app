import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground } from 'react-native';

class BMR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BMR: 0,
      target: 0,
      keyword: '',
      verb: ''
    };
  }

  componentDidMount() {
    let { profile } = this.props;
    let BMR, target;
    let W = Number(profile.weight.split(' ')[0]) * 0.453592;
    let H = Number(profile.height.split('/')[0]) * 30.48 + Number(profile.height.split('/')[1]) * 2.54;
    let keyword = profile.weekly_goal.split(' ')[0];
    let diff = Number(profile.weekly_goal.split(' ')[1]);
    if (profile.gender === 'Female') {
      BMR = Math.round(10 * W + 6.25 * H - 5 * profile.age - 161);
    } else {
      BMR = Math.round(10 * W + 6.25 * H - 5 * profile.age + 5);
    }
    if (profile.activity_lvl === 'Active') {
      BMR = Math.round(BMR * 1.5);
    }
    if (profile.activity_lvl === 'Not Active') {
      BMR = Math.round(BMR * 1.2);
    }
    if (profile.activity_lvl === 'Lightly Active') {
      BMR = Math.round(BMR * 1.4);
    }
    if (profile.activity_lvl === 'Very Active') {
      BMR = Math.round(BMR * 1.8);
    }
    if (keyword === 'Lose') {
      target = BMR - diff * 500;
      this.setState({ verb: 'reduce', target });
    }
    if (keyword === 'Gain') {
      target = BMR + diff * 500;
      this.setState({ verb: 'increase', target });
    }
    if (keyword === 'Maintain') {
      this.setState({ verb: 'maintain' });
    }
    this.setState({ BMR });
  }

  render() {
    let { profile } = this.props;
    let { BMR, verb, target } = this.state;
    return (
      <View style={styles.BMR}>
        <Text id="ct_BMR_statement">
          "In order to {profile.weekly_goal[0].toLowerCase()}{profile.weekly_goal.slice(1)},&nbsp;
          { verb === 'maintain' ? (
            <Text>
              your daily calorie intake will be {BMR} calories per day."
            </Text>
          ) : (
            <Text>
              you will need to {verb} your daily calorie intake 
              from your normal maintenance level of {BMR} calories per day, to {target} calories per day."
            </Text>
          ) }
        </Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  BMR: {
    // backgroundColor: 'rgb(230,230,230)',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 700 / 150,
    borderColor: 'rgb(80,80,80)',
    borderWidth: 1
  }
});

export default BMR;