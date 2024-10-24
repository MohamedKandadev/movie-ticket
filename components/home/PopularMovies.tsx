import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES} from '../../constants';
import Heading2 from '../common/Heading2';
import MovieCard from '../common/MovieCard';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {CARD_SIZE} from '../../types/enums/size';

type Props = {};

const PopularMovies = (props: Props) => {
  const movies = useSelector((state: RootState) => state.movie.popularMovies);
  return (
    <View
      style={{
        marginBottom: SIZES.radius * 4,
      }}>
      <View
        style={{
          marginBottom: SIZES.raduis2,
          paddingHorizontal: SIZES.padding,
        }}>
        <Heading2 title="Popular" title2="" style={{fontSize: 20}} />
      </View>
      <View>
        <FlatList
          data={movies}
          renderItem={({item}) => (
            <MovieCard {...item} size={CARD_SIZE.SMALL} />
          )}
          keyExtractor={item => item.id.toString()}
          snapToInterval={SIZES.width * 0.6}
          decelerationRate={0}
          horizontal
          contentContainerStyle={{
            gap: 20,
            paddingHorizontal: SIZES.padding,
            alignItems: 'center',
          }}
          // onViewablr
        />
      </View>
    </View>
  );
};

export default PopularMovies;

const styles = StyleSheet.create({});
