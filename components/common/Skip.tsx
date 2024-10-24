import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import FONTS from '../../constants/fonts';
import {COLORS} from '../../constants';

type Props = {};

const Skip: FC<{onPress?: () => void}> = ({onPress}) => {
  return (
    <Pressable style={styles.buttonSkip} onPress={onPress}>
      <Text style={styles.buttonSkipText}> Skip Now</Text>
    </Pressable>
  );
};

export default Skip;

const styles = StyleSheet.create({
  buttonSkip: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  buttonSkipText: {
    ...FONTS.pr4,
    color: COLORS.while40,
  },
});
