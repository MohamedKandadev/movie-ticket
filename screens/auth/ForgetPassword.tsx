import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES} from '../../constants';
import FONTS from '../../constants/fonts';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import Header from '../../components/common/Header';
import {NavigationScreenProps} from '../../types/interfaces/pages';
import {ROUTE} from '../../types/enums/Route';

type Props = {};

const ForgetPassword: FC<NavigationScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View style={styles.screenContainer}>
        <View>
          <Header title="Forget Password" onPress={() => navigation.goBack()} />
          <Text style={styles.forgetPasswordDesc}>
            Enter the email associated with your account and we’ll send an email
            with instructions to reset your password.
          </Text>
          <Input placeHolder="Email" />
        </View>
        <View style={{width: '65%', marginHorizontal: 'auto'}}>
          <Button
            title="Send"
            onPress={() => navigation.navigate(ROUTE.REQUEST_OTP)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.margin,
    justifyContent: 'space-between',
  },
  forgetPasswordDesc: {
    ...FONTS.pr2,
    marginTop: SIZES.margin * 3,
    marginBottom: SIZES.padding,
    color: COLORS.while80,
  },
});
