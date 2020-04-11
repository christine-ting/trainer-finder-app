import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { authenticationStyle } from '../../styles/profile';
import key from '../../env/key';
import axios from 'axios';

const Authentication = () => {
  const [ inputEmail, setEmail ] = useState('');
  const [ inputPassword, setPassword ] = useState('');
  const [ showPassword, setShowPassword ] = useState(false); 
  const [ hiddenPassword, setHiddenPassword ] = useState('');

  const changeHandler = (text, type) => {
    if (type === 'email') {
      setEmail(text);
    }
    if (type === 'password') {
      setPassword(text);
      let count = '';
      for (var char of text) {
        count += '*';
      }
      setHiddenPassword(count);
    }
  };

  const signUp = () => {
    const APIKey = key.firebaseAPIKey;
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKey}`;
    const body = {
      email: inputEmail,
      password: inputPassword,
      returnSecureToken: true
    };
    axios.post(url, body)
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  };

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
              onChangeText={text => changeHandler(text, 'email')}
            />
            <Text style={styles.title}>PASSWORD</Text>
            { showPassword ? (
              <TextInput
                style={styles.authInput}
                value={inputPassword}
                onChangeText={text => changeHandler(text, 'password')}
              />
            ) : (
              <TextInput
                style={styles.authInput}
                value={hiddenPassword}
                onChangeText={text => changeHandler(text, 'password')}
              />
            ) }
            <TouchableOpacity style={styles.showPwdView} onPress={() => setShowPassword(!showPassword)}>
              { showPassword ? (
                <Text style={styles.showPwdText}>hide password</Text>
              ) : (
                <Text style={styles.showPwdText}>show password</Text>
              ) }
            </TouchableOpacity>
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signUpButton} onPress={() => signUp()}>
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