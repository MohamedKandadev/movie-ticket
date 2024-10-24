import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import {ROUTE, TABS} from '../types/enums/Route';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ForgetPassword from '../screens/auth/ForgetPassword';
import {COLORS} from '../constants';
import RequestOtp from '../screens/auth/RequestOtp';
import FavoriteGenre from '../screens/FavoriteGenre';
import TabNavigation from './TabNavigation';
import MovieDetails from '../screens/tab/MovieDetails';
import SeatBooking from '../screens/tab/SeatBooking';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE.SPLASH}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTE.SPLASH} component={Splash} />
      <Stack.Screen name={ROUTE.LOGIN} component={Login} />
      <Stack.Screen name={ROUTE.REGISTER} component={Register} />
      <Stack.Screen name={ROUTE.FORGET_PASS} component={ForgetPassword} />
      <Stack.Screen name={ROUTE.REQUEST_OTP} component={RequestOtp} />
      <Stack.Screen name={ROUTE.FAVORITE_GENRE} component={FavoriteGenre} />
      <Stack.Screen name={TABS.MOVIE_DETAILS} component={MovieDetails} />
      <Stack.Screen name={TABS.SEAT_BOOKING} component={SeatBooking} />

      <Stack.Screen name={ROUTE.TABS} component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
