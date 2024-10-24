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
import {ROUTE, TABS} from '../../types/enums/Route';

type Props = {};

const Login: FC<NavigationScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <View style={styles.screenContainer}>
        <View style={{marginBottom: SIZES.margin * 5}}>
          <Heading title="Welcome back. You’ve been missed" />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View style={{gap: SIZES.radius * 3}}>
            <Input placeHolder="Email or Phone" />
            <Input placeHolder="Password" isSecure />
            <Pressable
              style={styles.forgetPassLink}
              onPress={() => navigation.navigate(ROUTE.FORGET_PASS)}>
              <Text style={styles.forgetPassText}> Forget Password</Text>
            </Pressable>
          </View>
          <View style={{rowGap: 24}}>
            <Pressable style={styles.signupLink}>
              <Text
                style={styles.signupText}
                onPress={() => navigation.navigate(ROUTE.REGISTER)}>
                Don't have an account?{' '}
                <Text style={{color: COLORS.white, fontWeight: 'bold'}}>
                  {' '}
                  Sign Up
                </Text>
              </Text>
            </Pressable>
            <View
              style={{
                width: '70%',
                marginHorizontal: 'auto',
              }}>
              <Button title="Login" />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Skip
                onPress={() =>
                  navigation.navigate(ROUTE.TABS, {screen: TABS.HOME})
                }
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.margin * 2,
  },
  forgetPassLink: {
    marginTop: -25,
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
