import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import FONTS from '../../constants/fonts';
import {HeadingProps} from '../../types/interfaces/pages';

type Props = {};

const Heading: FC<HeadingProps> = ({title}) => {
  return (
    <View style={{paddingRight: 50}}>
      <Text style={styles.headingText}>{title}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  headingText: {
    ...FONTS.h1,
    color: '#fff',
  },
});
