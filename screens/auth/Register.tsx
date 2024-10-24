import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES} from '../../constants';
import Heading from '../../components/common/Heading';
import FONTS from '../../constants/fonts';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import Skip from '../../components/common/Skip';
import {NavigationScreenProps} from '../../types/interfaces/pages';
import {ROUTE} from '../../types/enums/Route';

type Props = {};

const Register: FC<NavigationScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <View style={styles.screenContainer}>
        <View style={{marginBottom: SIZES.margin * 5}}>
          <Heading title="Let’s Register to Get Started" />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View>
            <Input placeHolder="Email or Phone" />
            <Input placeHolder="Password" isSecure />
            <Input placeHolder="Password Authentication" isSecure />
          </View>
          <View style={{rowGap: 24}}>
            <Pressable
              style={styles.signupLink}
              onPress={() => navigation.navigate(ROUTE.LOGIN)}>
              <Text style={styles.signupText}>
                Have any account?{' '}
                <Text style={{color: COLORS.white, fontWeight: 'bold'}}>
                  {' '}
                  Login{' '}
                </Text>
              </Text>
            </Pressable>
            <View
              style={{
                width: '70%',
                marginHorizontal: 'auto',
              }}>
              <Button />
            </View>
            <Skip />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.margin * 2,
  },
  forgetPassLink: {
    marginTop: -15,
  },
  forgetPassText: {
    textAlign: 'right',
    ...FONTS.pr4,
    color: COLORS.secondary,
  },

  signupLink: {},
  signupText: {
    textAlign: 'center',
    ...FONTS.pr4,
    color: COLORS.while60,
  },
});
