import React, { useState, useEffect } from 'react';
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
import Colors from '../../styles/profile/colors';

const APIKey = key.firebaseAPIKey;

const Authentication = ({ navigation }) => {
  const [inputEmail, setEmail] = useState('');
  const [inputPassword, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  useEffect(() => {
    navigation.addListener(
      'didFocus',
      payload => {
        changeHandler('', 'email');
        changeHandler('', 'password');
        setHidePassword(true);
      }
    );
  }, []);

  const changeHandler = (text, type) => {
    if (type === 'email') {
      setEmail(text);
    }
    if (type === 'password') {
      setPassword(text);
    }
  };

  const authenticate = method => {
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
      .then(result => {
        if (method === 'login') {
          navigation.navigate({
            routeName: 'Profile',
            params: {
              email: result.data.email
            }
          });
        }
        if (method === 'signUp') {
          navigation.navigate({
            routeName: 'Account',
            params: {
              email: result.data.email
            }
          });
        }
      })
      .catch(error => {
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

  const checkError = response => {
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
      <View style={styles.authentication}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.authView}>
            <View style={styles.authBox}>
              <Text style={styles.title}>EMAIL</Text>
              <TextInput
                style={styles.authInput}
                autoCorrect={false}
                value={inputEmail}
                onChangeText={text => changeHandler(text, 'email')}
              />
              <Text style={styles.title}>PASSWORD</Text>
              <TextInput
                style={styles.authInput}
                autoCorrect={false}
                secureTextEntry={hidePassword}
                value={inputPassword}
                onChangeText={text => changeHandler(text, 'password')}
              />
              <TouchableOpacity
                style={styles.showPwdView}
                onPress={() => setHidePassword(!hidePassword)}
              >
                <Text style={styles.showPwdText}>
                  {hidePassword ? 'show' : 'hide'} password
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
    </View>
  );
};

Authentication.navigationOptions = {
  headerTitle: 'Authentication',
  headerStyle: {
    backgroundColor: Colors.headerFooter,
    shadowColor: 'transparent'
  },
  headerTintColor: Colors.lightGrey,
  headerTitleStyle: {
    fontSize: 20
  }
};

const styles = StyleSheet.create(authenticationStyle);

export default Authentication;
