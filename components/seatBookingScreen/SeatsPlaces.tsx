import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {initialSeats, isSeatBooked} from '../../helpers/ticket';
import {COLORS} from '../../constants';
import _ from 'lodash';

type SeatsProps = {
  selectedSeats: number[][];
  setSelectedSeats: (seats: number[][]) => void;
  seats: number[][];
};

const SeatsPlaces: FC<SeatsProps> = ({
  selectedSeats,
  setSelectedSeats,
  seats,
}) => {
  const handleAddSeats = (seat: number[]) => {
    console.log('00000', seat);
    const seatExiste = selectedSeats.find((seatS: number[]) =>
      _.isEqual(seatS, seat),
    );
    console.log('00000', seatExiste);

    if (!seatExiste) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      setSelectedSeats(
        selectedSeats.filter((seatS: number[]) => {
          console.log(_.isEqual(seatS, seat));
          return _.isEqual(seatS, seat) === false;
        }),
      );
    }
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', gap: 10}}>
      {initialSeats.map((row: any, i) => {
        const rowSelected = selectedSeats.filter(
          (seat: number[]) => seat[0] === i,
        );
        const rowS = seats.filter((seat: number[]) => seat[0] === i);
        if (rowS.length > 0)
          console.log('🚀 ~ {initialSeats.map ~ rowS:', rowS);
        return (
          <View style={{flexDirection: 'row', gap: 10}} key={`row-${i}`}>
            {row.map((seat: [], index: number) => {
              const isSeatSelected =
                rowSelected.find(seat => seat[1] === index) !== undefined;
              const isSeatS =
                rowS.find(seat => seat[1] === index) !== undefined;
              return (
                <Pressable
                  onPress={() => !isSeatS && handleAddSeats([i, index])}
                  key={`${i}-${index}`}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 7,
                    borderWidth: 1,
                    borderColor: isSeatSelected
                      ? COLORS.secondary
                      : isSeatS
                      ? COLORS.primary400
                      : COLORS.primary300,
                    marginRight: index + 1 === row.length / 2 ? 15 : 0,
                    marginLeft: index + 1 === row.length / 2 + 1 ? 15 : 0,
                    // backgroundColor: isSeatSelected
                    //   ? COLORS.secondary
                    //   : isSeatS
                    //   ? COLORS.primary400
                    //   : 'transparent',
                    backgroundColor: isSeatS
                      ? COLORS.primary400
                      : isSeatSelected
                      ? COLORS.secondary
                      : 'transparent',
                  }}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default SeatsPlaces;

const styles = StyleSheet.create({});
