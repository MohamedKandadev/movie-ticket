import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {COLORS, SIZES, STYLES} from '../../constants';
import {NavigationScreenProps} from '../../types/interfaces/pages';
import Header from '../../components/common/Header';
import {useGetMovieDetailsQuery} from '../../store/movies/api';
import {CARD_SIZE} from '../../types/enums/size';
import {baseImagePath} from '../../api';
import FONTS from '../../constants/fonts';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import Heading2 from '../../components/common/Heading2';
import Button from '../../components/common/Button';
import {TABS} from '../../types/enums/Route';

type Props = {};

const MovieDetails: FC<NavigationScreenProps> = ({navigation, route}) => {
  const {movieId} = route.params as {movieId: string};
  const {data} = useGetMovieDetailsQuery(movieId);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View style={{...STYLES.screenContainer}}>
        <View style={{paddingVertical: SIZES.radius}}>
          <Header title="Detail Movie" onPress={() => navigation.goBack()} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginTop: SIZES.margin * 3,
              marginBottom: SIZES.margin * 2,
              alignItems: 'center',
            }}>
            <Image
              source={{uri: baseImagePath('w500', data?.poster_path!)}}
              style={{
                width: '100%',
                maxWidth: 300,
                height: 356,
                borderRadius: SIZES.raduis2,
              }}
            />
            <View style={{marginTop: SIZES.padding2, alignItems: 'center'}}>
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.white,
                  textAlign: 'center',
                  marginBottom: SIZES.margin,
                }}>
                {data?.original_title}
              </Text>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 19}}>
                <Text style={{...FONTS.pr4, color: COLORS.gray300}}>2020</Text>
                <View
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 6,
                    backgroundColor: COLORS.gray300,
                  }}
                />
                <Text style={{...FONTS.pr4, color: COLORS.gray300}}>
                  Action, Romance
                </Text>
                <View
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 6,
                    backgroundColor: COLORS.gray300,
                  }}
                />
                <Text style={{...FONTS.pr4, color: COLORS.gray300}}>
                  2h 46m
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', gap: 4, marginTop: SIZES.margin}}>
                <FontAwesomeIcon icon={faStar} color="#F99B00" />
                <FontAwesomeIcon icon={faStar} color="#F99B00" />
                <FontAwesomeIcon icon={faStar} color="#F99B00" />
                <FontAwesomeIcon icon={faStar} color="#F99B00" />
                <FontAwesomeIcon icon={faStar} color={COLORS.primary100} />
              </View>
            </View>
          </View>
          <View>
            <Heading2 title="Plot" title2="Summary" style={{fontSize: 20}} />
            <Text
              style={{
                ...FONTS.pr3,
                color: COLORS.gray300,
                marginTop: SIZES.margin,
              }}>
              {data?.overview}
            </Text>
          </View>
          <View
            style={{width: '75%', margin: 'auto', marginTop: SIZES.margin * 2}}>
            <Button
              title="Buy Ticket"
              onPress={() => navigation.navigate(TABS.SEAT_BOOKING, {movieId})}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
