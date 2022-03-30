import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles/styling';
import logo from '../../assets/images/car_logo.jpg';

const ReviewUs = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reviewUs, setReviewUs] = useState('');
  const reviewForm = async () => {
    await fetch('http://192.168.192.97:5000/api/review', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        reviewUs,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        Alert.alert('Thanks For Choosing Us');
        // return json;
        navigation.navigate('Categories');
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Some thing went wrong try again plz!!');
        // navigation.navigate('SignUp');
      });
  };
  const Logout = () => {
    Alert.alert('Logout Successfully');
    navigation.navigate('Login');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <FormData onPress={registration}> */}
      <Text
        style={[styles.textBlack, styles.fs1, styles.textCenter, styles.mt1]}>
        Car Rental
      </Text>
      <View>
        {/* <Image source={logo} style={{width: 350, height: 200}} /> */}
      </View>
      <Text
        style={[styles.textBlack, styles.fs1, styles.textCenter, styles.mt1]}>
        Review Us
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
          multiline={true}
          numberOfLines={10}
          style={[styles.input, styles.mt2, styles.bgBlack, styles.textLight]}
          placeholder="write your experience with us"
          name="review"
          value={reviewUs}
          onChangeText={e => setReviewUs(e)}
        />
      </View>
      <View>
        <TouchableOpacity onPress={reviewForm}>
          <Text style={[styles.btn, styles.mt2, styles.bgBlack]}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={Logout}>
          <Text style={[styles.textBlack, styles.fs3, styles.textCenter]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      {/* </FormData> */}
    </View>
  );
};

export default ReviewUs;
