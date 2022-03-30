import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/forms/Login';
import SignUp from '../screens/forms/Signup';
import Categories from '../screens/categories/Categories';
import ReviewUs from '../screens/forms/ReviewUs';
import BookingForm from '../screens/forms/BookingForm';
import CarDetail from '../screens/categories/CarDetail';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ReviewUs" component={ReviewUs} />
        <Stack.Screen name="BookingForm" component={BookingForm} />
        <Stack.Screen name="CarDetail" component={CarDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
