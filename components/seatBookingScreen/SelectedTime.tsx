import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {timeArray} from '../../helpers/ticket';
import FONTS from '../../constants/fonts';
import {COLORS, SIZES} from '../../constants';
import {SelectedTimeProps} from '../../types/interfaces/pages';

const SelectedTime: FC<SelectedTimeProps> = ({
  selectedTime,
  setSelectedTime,
}) => {
  return (
    <FlatList
      data={timeArray}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
        <Pressable
          onPress={() => setSelectedTime(item)}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              ...FONTS.pr1,
              color: item === selectedTime ? COLORS.white : COLORS.gray200,
              textAlign: 'center',
              marginBottom: SIZES.font,
            }}>
            {item}
          </Text>
          {item === selectedTime && (
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: SIZES.raduis1,
                backgroundColor: COLORS.white,
              }}
            />
          )}
        </Pressable>
      )}
      contentContainerStyle={{gap: 37}}
    />
  );
};

export default SelectedTime;

const styles = StyleSheet.create({});
