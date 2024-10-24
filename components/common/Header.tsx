import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import FONTS from '../../constants/fonts';
import {COLORS} from '../../constants';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {HeaderProps} from '../../types/interfaces/pages';

type Props = {};

const Header: FC<HeaderProps> = ({title, onPress}) => {
  return (
    <View style={styles.headerContainer}>
      {onPress && (
        <Pressable style={styles.headerBackButton} onPress={onPress}>
          <FontAwesomeIcon icon={faChevronLeft} size={20} color="white" />
        </Pressable>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  headerBackButton: {
    position: 'absolute',
    left: 0,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    ...FONTS.pr1,
    color: COLORS.white,
    textAlign: 'center',
  },
});
