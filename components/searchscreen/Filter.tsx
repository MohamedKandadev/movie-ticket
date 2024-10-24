import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES} from '../../constants';
import FONTS from '../../constants/fonts';

type Props = {};

const Filter: FC<{
  isNowPlayingVisible: boolean;
  setIsNowPlayingVisible: () => void;
}> = ({isNowPlayingVisible, setIsNowPlayingVisible}) => {
  return (
    <View style={{marginTop: SIZES.radius * 3}}>
      <Pressable
        style={[
          styles.filterButton,
          isNowPlayingVisible && {backgroundColor: COLORS.secondary},
        ]}
        onPress={setIsNowPlayingVisible}>
        <Text style={styles.filterText}> Now Playing</Text>
      </Pressable>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filterButton: {
    paddingHorizontal: SIZES.radius,
    paddingVertical: 9,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary200,
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  filterText: {
    ...FONTS.pr2,
    color: COLORS.white,
    textAlign: 'center',
  },
});
