import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {COLORS, SIZES} from '../../constants';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import {NavigationScreenProps} from '../../types/interfaces/pages';
import {ROUTE} from '../../types/enums/Route';
import FONTS from '../../constants/fonts';
import OTPInputView from '@hirbod/react-native-otp-input';
import OTPTextInput from 'react-native-otp-textinput';

type Props = {};

const RequestOtp: FC<NavigationScreenProps> = ({navigation}) => {
  const [otpCode, setOtpCode] = useState('');

  const handleCodeFilled = (code: string) => {
    console.log('OTP Code:', code);
    setOtpCode(code);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View style={styles.screenContainer}>
        <View>
          <Header title="OTP" onPress={() => navigation.goBack()} />
          <View style={styles.otpTimerContainer}>
            <Text style={styles.otpTime}>00:30</Text>
            <Text style={styles.otpDesc}>
              Type the verification code we’ve sent you
            </Text>
            <OTPTextInput
              // pinCount={4}
              // style={{height: SIZES.width / 8, marginTop: SIZES.padding * 2}}
              // autoFocusOnLoad={true}
              // code={otpCode} // You can pre-fill or change the OTP code here
              // onCodeChanged={code => setOtpCode(code)} //
              // onCodeFilled={handleCodeFilled}

              textInputStyle={{
                color: COLORS.white,
                justifyContent: 'center',
                alignItems: 'center',
                height: 70,
                width: 70,
                borderWidth: 0,
                borderRadius: SIZES.raduis3,
                backgroundColor: COLORS.primary200,
                ...FONTS.h1,
                lineHeight: 0,
                shadowColor: 'red',
                borderBlockColor: COLORS.primary200,
              }}
              autoFocus
            />
          </View>
        </View>
        <View style={{width: '65%', marginHorizontal: 'auto'}}>
          <Button
            title="Confirm"
            onPress={() => navigation.navigate(ROUTE.FAVORITE_GENRE)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RequestOtp;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.margin,
    justifyContent: 'space-between',
  },
  otpTimerContainer: {
    marginTop: SIZES.raduis1,
    width: 188,
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
  otpTime: {
    ...FONTS.t1,
    color: COLORS.white,
    marginBottom: SIZES.radius,
  },
  otpDesc: {
    textAlign: 'center',
    ...FONTS.pr2,
    color: COLORS.while40,
    fontSize: SIZES.pr2,
    marginBottom: SIZES.margin * 4,
  },
});
