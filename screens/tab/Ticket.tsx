import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, STYLES} from '../../constants';
import Header from '../../components/common/Header';
import FONTS from '../../constants/fonts';
import {moviesData} from '../../helpers/ticket';
import {baseImagePath} from '../../api';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

type Props = {};

const Ticket = (props: Props) => {
  console.log(Array.from(moviesData));

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View style={{...STYLES.screenContainer}}>
        <View>
          <View
            style={{
              paddingVertical: SIZES.radius,
              marginBottom: SIZES.radius * 4,
            }}>
            <Header title="My Ticket" />
          </View>
        </View>
        <View style={{gap: 35}}>
          <View>
            <Text
              style={{
                ...FONTS.pr2,
                color: COLORS.gray200,
                textAlign: 'center',
                marginBottom: SIZES.margin,
              }}>
              20:00
            </Text>
            <View
              style={{
                width: '100%',
                height: 155,
                backgroundColor: COLORS.primary200,
                borderRadius: SIZES.radius * 2,
                position: 'relative',
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 38,
                  height: 38,
                  backgroundColor: COLORS.primary,
                  borderRadius: SIZES.raduis1,
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: [{translateY: '-20%'}],
                }}
              />
              <View
                style={{
                  width: 38,
                  height: 38,
                  backgroundColor: COLORS.primary,
                  borderRadius: SIZES.raduis1,
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: [{translateY: '20%'}],
                }}
              />
              <Image
                source={{
                  uri: baseImagePath(
                    'w500',
                    '/j736cRzBtEPCm0nHnpRN1prqiqj.jpg',
                  ),
                }}
                style={{
                  width: 93,
                  height: '100%',
                  borderRadius: SIZES.font,
                  marginRight: SIZES.margin,
                }}
              />
              <View>
                <Text
                  style={{
                    ...FONTS.pr1,
                    color: COLORS.white,
                    fontWeight: 'bold',
                    marginBottom: 4,
                  }}>
                  I Care a Lot
                </Text>
                <Text style={{...FONTS.pr2, color: COLORS.while40}}>
                  Comedy, Crime
                </Text>

                <View style={{flexDirection: 'row', gap: 4, marginTop: 14}}>
                  <FontAwesomeIcon icon={faStar} color="#F99B00" />
                  <FontAwesomeIcon icon={faStar} color="#F99B00" />
                  <FontAwesomeIcon icon={faStar} color="#F99B00" />
                  <FontAwesomeIcon icon={faStar} color="#F99B00" />
                  <FontAwesomeIcon icon={faStar} color={COLORS.primary100} />
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                ...FONTS.pr2,
                color: COLORS.gray200,
                textAlign: 'center',
                marginBottom: SIZES.margin,
              }}>
              16:00
            </Text>
            <View
              style={{
                width: '100%',
                height: 155,
                backgroundColor: COLORS.primary200,
                borderRadius: SIZES.radius * 2,
                position: 'relative',
                // padding: 20,
              }}>
              <View
                style={{
                  width: 38,
                  height: 38,
                  backgroundColor: COLORS.primary,
                  borderRadius: SIZES.raduis1,
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: [{translateX: '-20%'}, {translateY: '-20%'}],
                }}
              />
              <View
                style={{
                  width: 38,
                  height: 38,
                  backgroundColor: COLORS.primary,
                  borderRadius: SIZES.raduis1,
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: [{translateX: '-20%'}, {translateY: '20%'}],
                }}
              />
              <View
                style={{
                  padding: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: '100%',
                }}>
                <Image
                  source={{
                    uri: baseImagePath(
                      'w500',
                      '/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg',
                    ),
                  }}
                  style={{
                    width: 93,
                    height: '100%',
                    borderRadius: SIZES.font,
                    marginRight: SIZES.margin,
                  }}
                />
                <View>
                  <Text
                    style={{
                      ...FONTS.pr1,
                      color: COLORS.white,
                      fontWeight: 'bold',
                      marginBottom: 4,
                    }}>
                    Wrong Turn
                  </Text>
                  <Text style={{...FONTS.pr2, color: COLORS.while40}}>
                    Horror, Crime
                  </Text>

                  <View style={{flexDirection: 'row', gap: 4, marginTop: 14}}>
                    <FontAwesomeIcon icon={faStar} color="#F99B00" />
                    <FontAwesomeIcon icon={faStar} color="#F99B00" />
                    <FontAwesomeIcon icon={faStar} color="#F99B00" />
                    <FontAwesomeIcon icon={faStar} color="#F99B00" />
                    <FontAwesomeIcon icon={faStar} color={COLORS.primary100} />
                  </View>
                </View>
              </View>

              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(4, 16, 58, .4)',
                  zIndex: 4,
                  borderRadius: SIZES.radius * 2,
                  // opacity: 0.48,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: '70%',
                    height: '60%',
                    borderRadius: SIZES.radius,
                    borderColor: COLORS.white,
                    borderWidth: 3,
                    padding: 5,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: SIZES.radius,
                      borderColor: COLORS.white,
                      borderWidth: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{...FONTS.h1, fontSize: 24, color: COLORS.white}}>
                      USED TICKET
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Ticket;

const styles = StyleSheet.create({});
