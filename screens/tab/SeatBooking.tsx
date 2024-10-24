import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import _ from 'lodash';
import React, {FC, useEffect, useState} from 'react';
import {COLORS, SIZES, STYLES} from '../../constants';
import {moviesData} from '../../helpers/ticket';
import Header from '../../components/common/Header';
import {NavigationScreenProps} from '../../types/interfaces/pages';
import FONTS from '../../constants/fonts';
import Button from '../../components/common/Button';
import SelectedDate from '../../components/seatBookingScreen/SelectedDate';
import SelectedTime from '../../components/seatBookingScreen/SelectedTime';
import SeatsPlaces from '../../components/seatBookingScreen/SeatsPlaces';
import SeatsFilter from '../../components/seatBookingScreen/SeatsFilter';

const SeatBooking: FC<NavigationScreenProps> = ({navigation, route}) => {
  const {movieId} = route.params as {movieId: string};

  const [seatData, setSeatData] = useState(moviesData);
  const [seats, setSeats] = useState([]);

  const [selectedDateTime, setSelectedDayTime] = useState<{
    date: string;
    time: string;
  }>({
    date: '',
    time: '',
  });
  const [selectedSeats, setSelectedSeats] = useState<number[][]>([]);

  useEffect(() => {
    const movieExists = seatData[movieId];
    const dateExists = movieExists && movieExists[selectedDateTime.date];
    const bookedSeats = dateExists && dateExists[selectedDateTime.time];

    setSeats(bookedSeats !== undefined ? bookedSeats : []);
  }, [movieId, selectedDateTime]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View
        style={{...STYLES.screenContainer, justifyContent: 'space-between'}}>
        <View>
          <View
            style={{
              paddingVertical: SIZES.radius,
              marginBottom: SIZES.radius * 4,
            }}>
            <Header title="Select Seats" onPress={() => navigation.goBack()} />
          </View>

          <SelectedDate
            selectedDay={selectedDateTime.date}
            setSelectedDay={date =>
              setSelectedDayTime({...selectedDateTime, date: date})
            }
          />
          <SelectedTime
            selectedTime={selectedDateTime.time}
            setSelectedTime={time =>
              setSelectedDayTime({...selectedDateTime, time: time})
            }
          />
        </View>

        <View>
          <SeatsPlaces
            seats={seats}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
          />

          <SeatsFilter />
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 70,
            marginTop: SIZES.radius * 4,
          }}>
          <View>
            <Text style={{...FONTS.pr2, color: COLORS.gray300}}>
              {selectedSeats.length} Seats
            </Text>
            <Text style={{...FONTS.pr1, color: COLORS.white}}>$75.09</Text>
          </View>
          <View style={{flex: 1}}>
            <Button title="Buy Now" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SeatBooking;

const styles = StyleSheet.create({});
