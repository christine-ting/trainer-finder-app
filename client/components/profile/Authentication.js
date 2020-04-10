import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { authenticationStyle } from '../../styles/profile';

const Authentication = () => {
  return (
    <View style={styles.authentication}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Authentication</Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.authView}>
          <View style={styles.authBox}>
            <Text style={styles.title}>EMAIL</Text>
            <TextInput
              style={styles.authInput}
              onChangeText={text => console.log(text)}
            />
            <Text style={styles.title}>PASSWORD</Text>
            <TextInput
              style={styles.authInput}
              onChangeText={text => console.log(text)}
            />
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signUpButton}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create(authenticationStyle);

export default Authentication;