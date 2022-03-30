import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles/styling';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import logo from '../../assets/images/car_logo.jpg';
const BookingForm = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [model, setModel] = useState('');
  const [dateTime, setDateTime] = useState('');

  const CarBooking = async ({navigation}) => {
    await fetch('http://192.168.192.97:5000/api/booking', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        model,
        dateTime,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        Alert.alert('Booking successfully enjoy your ride!');
        // return json;
        navigation.navigate('Categories');
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Plz fill all the feilds!');
        // navigation.navigate('SignUp');
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <FormData onPress={userLogin}> */}
      {/* <Text
        style={[styles.textBlack, styles.fs1, styles.textCenter, styles.mt1]}>
        Car Rental
      </Text> */}
      <View>
        <Image source={logo} style={{width: 350, height: 200}} />
      </View>
      <Text
        style={[styles.textBlack, styles.fs1, styles.textCenter, styles.mt1]}>
        Booking Form
      </Text>
      <View>
        <TextInput
          keyboardType="email-address"
          style={[styles.input, styles.mt4, styles.bgBlack, styles.textLight]}
          placeholder="enter your name"
          name="name"
          value={name}
          onChangeText={e => setName(e)}
        />
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
          style={[styles.input, styles.mt4, styles.bgBlack, styles.textLight]}
          placeholder="enter car model"
          name="date"
          value={model}
          onChangeText={e => setModel(e)}
        />
        <RNDateTimePicker
          mode="date"
          value={new Date()}
          dateFormat="dayofweek day month"
          onChangeText={e => setDateTime(e)}
        />
      </View>
      <View>
        <TouchableOpacity onPress={CarBooking}>
          <Text
            style={[styles.btn, styles.textCenter, styles.mt4, styles.bgBlack]}>
            Submit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ReviewUs')}>
          <Text
            style={[
              styles.mt2,
              styles.textBlack,
              styles.fs3,
              styles.textCenter,
              styles.mt1,
            ]}>
            Plz Review Us
          </Text>
        </TouchableOpacity>
      </View>
      {/* </FormData> */}
    </View>
  );
};

export default BookingForm;
