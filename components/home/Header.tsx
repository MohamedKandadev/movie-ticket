import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, ICONS, SIZES} from '../../constants';
import FONTS from '../../constants/fonts';
import Heading2 from '../common/Heading2';

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 16}}>
        <View style={styles.headerProfile}>
          <Image source={ICONS.profile} style={styles.headerProfileImage} />
        </View>
        <View style={styles.headerProfileInfo}>
          <Heading2 title="Hello" title2="Mohamed 👋" />
          <Text style={styles.headerDesc}>Book your favorite movie</Text>
        </View>
      </View>
      <View style={styles.headerProfile}>
        <View style={{position: 'relative'}}>
          <View style={styles.notificationPoint} />
          <Image
            source={ICONS.notification}
            style={styles.headerNotificationIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.radius * 4,
  },
  headerProfile: {
    width: 50,
    height: 50,
    borderRadius: SIZES.raduis1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: COLORS.primary100,
  },
  headerProfileImage: {
    width: 34,
    height: 34,
  },
  headerProfileInfo: {},
  headerProfileName: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: 'Oxygen Light',
  },
  headerDesc: {
    ...FONTS.pr4,
    color: COLORS.gray300,
  },
  headerNotification: {},
  headerNotificationIcon: {
    width: 24,
    height: 24,
  },
  notificationPoint: {
    width: 8,
    height: 8,
    borderRadius: SIZES.raduis1,
    backgroundColor: 'red',
    position: 'absolute',
    right: 0,
    zIndex: 1,
    // top: -4,
  },
});
