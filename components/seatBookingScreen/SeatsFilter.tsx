import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';
import FONTS from '../../constants/fonts';

const seatsFilterArray: {title: string; style: ViewStyle}[] = [
  {
    title: 'Available',
    style: {
      borderColor: COLORS.primary300,
    },
  },
  {
    title: 'Reserved',
    style: {
      backgroundColor: COLORS.primary400,
      borderColor: COLORS.primary400,
    },
  },
  {
    title: 'Selected',
    style: {
      borderColor: COLORS.secondary,
      backgroundColor: COLORS.secondary,
    },
  },
];

const SeatsFilter = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 'auto',
        columnGap: 27,
        marginTop: SIZES.radius * 3,
      }}>
      {seatsFilterArray.map(item => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={[
              {
                width: 20,
                height: 20,
                borderRadius: 3,
                borderWidth: 1,
                marginRight: 5,
              },
              item.style,
            ]}
          />
          <Text style={{...FONTS.pr2, color: COLORS.white, lineHeight: 20}}>
            {item.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default SeatsFilter;

const styles = StyleSheet.create({});
