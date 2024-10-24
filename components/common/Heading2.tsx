import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS} from '../../constants';
import FONTS from '../../constants/fonts';
import {Heading2Props} from '../../types/interfaces/pages';

const Heading2: FC<Heading2Props> = ({title, title2, style}) => {
  return (
    <Text style={[styles.headerProfileName, style]}>
      <Text style={{fontWeight: 700, fontFamily: 'Oxygen Bold'}}>{title}</Text>{' '}
      {title2}
    </Text>
  );
};

export default Heading2;

const styles = StyleSheet.create({
  headerProfileName: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: 'Oxygen Light',
  },
});
