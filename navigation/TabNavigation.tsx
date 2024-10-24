import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TABS} from '../types/enums/Route';
import Home from '../screens/tab/Home';
import MovieDetails from '../screens/tab/MovieDetails';
import Search from '../screens/tab/Search';
import SeatBooking from '../screens/tab/SeatBooking';
import Ticket from '../screens/tab/Ticket';
import UserAccount from '../screens/tab/UserAccount';
import {COLORS, SIZES} from '../constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {
  faChair,
  faHome,
  faMagnifyingGlass,
  faTicket,
} from '@fortawesome/free-solid-svg-icons';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const tabBarIcon = (color: any, focused: boolean, icon: IconProp) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      size={24}
      color={focused ? 'white' : COLORS.gray200}
    />
  );
};

const MovieDetailsStack = createStackNavigator();

const MovieDetailsStackScreen = () => (
  <MovieDetailsStack.Navigator
    initialRouteName={TABS.HOME}
    screenOptions={{headerShown: false}}>
    <MovieDetailsStack.Screen name={TABS.HOME} component={Home} />
  </MovieDetailsStack.Navigator>
);

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          height: 100,
          paddingTop: 34,
          shadowColor: 'white',
          // shadowOffset: {width: 0, height: 3},
          // shadowOpacity: 1,
          // shadowRadius: 1,
          borderTopColor: 'transparent',

          shadowOffset: {
            width: 20,
            height: 30,
          },
          // shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        },
        title: '',
      }}>
      <Tab.Screen
        name={'movie'}
        component={MovieDetailsStackScreen}
        options={{
          tabBarIcon: ({color, focused}) => tabBarIcon(color, focused, faHome),
        }}
      />
      <Tab.Screen
        name={TABS.TICKET}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                backgroundColor: COLORS.secondary,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 100,
              }}>
              {tabBarIcon(color, (focused = true), faTicket)}
            </View>
          ),
          // tabBarStyle: {
          //   backgroundColor: 'red',
          // },
        }}
        component={Ticket}
      />
      {/* <Tab.Screen
        name={TABS.SEARCH}
        options={{
          tabBarIcon: ({color, focused}) =>
            tabBarIcon(color, focused, faMagnifyingGlass),
        }}
        component={Search}
      /> */}
      <Tab.Screen
        name={'TABS.SEAT_BOOKING'}
        options={{
          tabBarIcon: ({color, focused}) => tabBarIcon(color, focused, faChair),
        }}
        component={SeatBooking}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
