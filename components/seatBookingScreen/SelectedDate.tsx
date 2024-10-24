import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {COLORS, SIZES} from '../../constants';
import FONTS from '../../constants/fonts';
import {SelectedDateProps} from '../../types/interfaces/pages';
import {generateDate} from '../../helpers/ticket';

type Props = {};

const SelectedDate: FC<SelectedDateProps> = ({selectedDay, setSelectedDay}) => {
  const [dateArray, setDateArray] = useState<string[]>(generateDate());

  return (
    <View style={{marginBottom: SIZES.radius * 2}}>
      {dateArray.length > 0 && (
        <FlatList
          data={dateArray}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <Pressable
              onPress={() => setSelectedDay(item)}
              style={[
                {
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 10,
                  borderRadius: 8,
                  backgroundColor:
                    item === selectedDay ? COLORS.secondary : COLORS.primary200,
                },
              ]}>
              <Text
                style={{
                  ...FONTS.pr4,
                  fontSize: SIZES.pr2,
                  color: COLORS.white,
                  textAlign: 'center',
                  marginRight: 5,
                }}>
                {item}
              </Text>
            </Pressable>
          )}
          contentContainerStyle={{gap: 18}}
        />
      )}
    </View>
  );
};

export default SelectedDate;

const styles = StyleSheet.create({});
