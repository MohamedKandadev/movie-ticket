import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, IMAGES} from './constants';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import {Provider} from 'react-redux';
import {store} from './store';

type Props = {};

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
