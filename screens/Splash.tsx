import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import {COLORS, IMAGES, SIZES} from '../constants';
import MovieBackground from '../components/common/MovieBackground';
import FONTS from '../constants/fonts';
import {NavigationScreenProps} from '../types/interfaces/pages';
import {ROUTE} from '../types/enums/Route';

type Props = {};

const Splash: FC<NavigationScreenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ROUTE.LOGIN);
    }, 2000);
  }, []);

  return (
    <MovieBackground>
      <View style={styles.textLogoContainer}>
        <Image source={IMAGES.logo} style={styles.logo} />
        <Text style={styles.logoText}>Find and book your favorite movie</Text>
      </View>
    </MovieBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  textLogoContainer: {
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 106,
    height: 48,
    marginBottom: SIZES.margin,
  },
  logoText: {
    ...FONTS.pr1,
    textAlign: 'center',
    color: COLORS.white,
    maxWidth: 179,
  },
});
