import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES} from '../../constants';
import FONTS from '../../constants/fonts';
import {InputProps} from '../../types/interfaces/pages';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

type Props = {};

const Input: FC<InputProps> = ({
  placeHolder,
  isSecure = false,
  onChange,
  value,
  IconLeft,
  IconRight,
}) => {
  return (
    <View style={styles.inputContainer}>
      {IconLeft && IconLeft}

      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        secureTextEntry={isSecure}
        placeholderTextColor={COLORS.gray}
        onChangeText={onChange}
        value={value}
      />
      {IconRight && IconRight}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary100,
    borderRadius: SIZES.radius,
    paddingHorizontal: 15,
    columnGap: 10,
    alignItems: 'center',
  },
  input: {
    height: 54,
    // width: '100%',
    // borderRadius: 5,
    // backgroundColor: COLORS.primary100,
    // color: 'white',
    // marginTop: 30,
    // width: '100%',
    flex: 1,
    ...FONTS.pr2,
    lineHeight: 0,
    color: COLORS.gray,
  },
});
