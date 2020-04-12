import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { authenticationStyle } from '../../styles/profile';
import key from '../../env/key';
import axios from 'axios';

const APIKey = key.firebaseAPIKey;

const Authentication = () => {
  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [hiddenPassword, setHiddenPassword] = useState('');

  const changeHandler = (text, type) => {
    if (type === 'email') {
      setEmail(text);
    }
    if (type === 'password') {
      if (!showPassword) {
        setPassword(inputPassword + text[text.length - 1]);
        let count = '';
        for (var char of text) {
          count += '*';
        }
        setHiddenPassword(count);
      } else {
        setPassword(text);
      }
    }
  };

  const authenticate = (method) => {
    let url;
    let message;
    if (method === 'login') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKey}`;
    }
    if (method === 'signUp') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKey}`;
    }
    const body = {
      email: inputEmail,
      password: inputPassword,
      returnSecureToken: true
    };
    axios
      .post(url, body)
      .then(result => console.log('result:', result))
      .catch((error) => {
        const response = error.response.data.error.message;
        message = checkError(response);
        Alert.alert(
          'Error',
          message,
          [
            {
              text: 'Okay'
            }
          ],
          { cancelable: false }
        );
      });
  };

  const checkError = (response) => {
    let message;
    if (response === 'INVALID_PASSWORD') {
      message = 'Invalid password.';
    }
    if (response === 'INVALID_EMAIL') {
      message = 'Invalid email.';
    }
    if (response.includes('ATTEMPTS')) {
      message = 'Too many unsuccessful login attempts. Please try again later.';
    }
    if (response === 'EMAIL_NOT_FOUND') {
      message = 'Email not found.';
    }
    if (response.includes('WEAK_PASSWORD')) {
      message = 'Password should be at least 6 characters.';
    }
    if (response === 'EMAIL_EXISTS') {
      message = 'Email exists.';
    }
    return message;
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
            <TextInput
              style={styles.authInput}
              value={showPassword ? inputPassword : hiddenPassword}
              onChangeText={text => changeHandler(text, 'password')}
            />
            <TouchableOpacity
              style={styles.showPwdView}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={styles.showPwdText}>
                {showPassword ? 'hide' : 'show'} password
              </Text>
            </TouchableOpacity>
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => authenticate('login')}
              >
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.signUpButton}
                onPress={() => authenticate('signUp')}
              >
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
