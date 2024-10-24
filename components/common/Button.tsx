import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES} from '../../constants';
import FONTS from '../../constants/fonts';
import {ButtonProps} from '../../types/interfaces/pages';

type Props = {};

const Button: FC<ButtonProps> = ({title = 'Login', onPress = () => {}}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}> {title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.secondary,
    height: 54,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.margin,
  },
  buttonText: {
    color: COLORS.white,
    ...FONTS.pr2,
    fontWeight: 'bold',
  },
});
