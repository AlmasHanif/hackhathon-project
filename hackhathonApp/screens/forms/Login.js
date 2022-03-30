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
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles/styling';
import logo from '../../assets/images/car_logo.jpg';
import {useLoginUserMutation} from '../../redux/services/userServices';
import axios from 'axios';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LoginUser = async () => {
    await fetch('http://192.168.192.97:5000/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        Alert.alert('Login successfully');
        // return json;
        navigation.navigate('Categories');
      })
      .catch(error => {
        console.error(error);
        Alert.alert(
          'Authentication error or you are a new user then signup first try again!!',
        );
        navigation.navigate('SignUp');
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <FormData onPress={userLogin}> */}
      <Text
        style={[styles.textBlack, styles.fs1, styles.textCenter, styles.mt1]}>
        Car Rental
      </Text>
      <View>
        <Image source={logo} style={{width: 350, height: 200}} />
      </View>
      <Text
        style={[styles.textBlack, styles.fs1, styles.textCenter, styles.mt1]}>
        Login Here
      </Text>
      <View>
        <TextInput
          keyboardType="email-address"
          style={[styles.input, styles.mt4, styles.bgBlack, styles.textLight]}
          placeholder="enter your email"
          name="email"
          value={email}
          onChangeText={e => setEmail(e)}
        />
      </View>
      <View>
        <TextInput
          secureTextEntry={true}
          style={[styles.input, styles.mt4, styles.bgBlack, styles.textLight]}
          placeholder="enter passsword"
          name="password"
          value={password}
          onChangeText={e => setPassword(e)}
        />
      </View>
      <View>
        <TouchableOpacity onPress={LoginUser}>
          <Text style={[styles.btn, styles.mt4, styles.bgBlack]}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={[
              styles.mt2,
              styles.textBlack,
              styles.fs3,
              styles.textCenter,
              styles.mt1,
            ]}>
            Are you new here SignUp First
          </Text>
        </TouchableOpacity>
      </View>
      {/* </FormData> */}
    </View>
  );
};

export default Login;
