import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, IMAGES, SIZES} from '../../constants';
import {MovieBackgroundProps} from '../../types/interfaces/pages';

const MovieBackground: FC<MovieBackgroundProps> = ({children}) => {
  return (
    <View style={styles.splashScreenContainer}>
      <Image source={IMAGES.background} style={styles.overlayBackgound} />
      <Image source={IMAGES.movieBack} style={styles.movieBackgound} />
      {children}
    </View>
  );
};

export default MovieBackground;

const styles = StyleSheet.create({
  splashScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  overlayBackgound: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  movieBackgound: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  textLogo: {
    zIndex: 3,
    alignItems: 'center',
  },
  logo: {
    width: 106,
    height: 48,
    marginBottom: SIZES.margin,
  },
  logoText: {
    textAlign: 'center',
    color: COLORS.white,
    maxWidth: 179,
  },
});
