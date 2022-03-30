import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  ImageBackground,
  View,
  Button,
  FormData,
  KeyboardAvoidingView,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles/styling';
import logo from '../../assets/images/car_logo.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpUser = async () => {
    await fetch('http://192.168.192.97:5000/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        Alert.alert('your account has created successfully');
        // return json;
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Something went wrong try again!!');
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <FormData onPress={registration}> */}
      <Text
        style={[styles.textBlack, styles.fs1, styles.textCenter, styles.mt1]}>
        Car Rental
      </Text>
      <View>
        <Image source={logo} style={{width: 350, height: 200}} />
      </View>
      <Text
        style={[styles.textBlack, styles.fs1, styles.textCenter, styles.mt1]}>
        SignUp Here
      </Text>
      <View>
        <TextInput
          keyboardType="email-address"
          style={[styles.input, styles.mt2, styles.bgBlack, styles.textLight]}
          placeholder="enter your name"
          name="name"
          value={name}
          onChangeText={e => setName(e)}
        />
      </View>
      <View>
        <TextInput
          keyboardType="email-address"
          style={[styles.input, styles.mt2, styles.bgBlack, styles.textLight]}
          placeholder="enter your email"
          name="email"
          value={email}
          onChangeText={e => setEmail(e)}
        />
      </View>
      <View>
        <TextInput
          secureTextEntry={true}
          style={[styles.input, styles.mt2, styles.bgBlack, styles.textLight]}
          placeholder="enter passsword"
          name="password"
          value={password}
          onChangeText={e => setPassword(e)}
        />
      </View>
      <View>
        <TouchableOpacity onPress={signUpUser}>
          <Text style={[styles.btn, styles.mt2, styles.bgBlack]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.textBlack, styles.fs3, styles.textCenter]}>
            Login here
          </Text>
        </TouchableOpacity>
      </View>
      {/* </FormData> */}
    </View>
  );
};

export default SignUp;
