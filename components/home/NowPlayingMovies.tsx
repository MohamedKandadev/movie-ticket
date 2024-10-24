import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import Heading2 from '../common/Heading2';
import {SIZES} from '../../constants';
import MovieCard from '../common/MovieCard';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

type Props = {};

const NowPlayingMovies: FC<{onPress: (id: any) => void}> = ({onPress}) => {
  const movies = useSelector(
    (state: RootState) => state.movie.nowPlayingMovies,
  );
  const [listNowPlayingMovies, setListNowPlayingMovies] = useState<any[]>([]);
  const [indexItemVisible, setIndexItemVisible] = useState<number | null>(null);

  const spacer_item_size = (SIZES.width - SIZES.width * 0.6 - 20) / 2;

  useEffect(() => {
    if (movies.length > 0) {
      setListNowPlayingMovies([{id: 'dummuy1'}, ...movies, {id: 'dummuy1'}]);
    }
  }, [movies]);

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
        <Heading2 title="Now" title2="Showing" style={{fontSize: 20}} />
      </View>
      <View>
        <FlatList
          data={listNowPlayingMovies}
          bounces={false}
          renderItem={({item, index}) => {
            if (!item.original_title)
              return (
                <View
                  style={{
                    width: (SIZES.width - (SIZES.width * 0.6 + 20 * 4)) / 2,
                  }}
                />
              );
            return <MovieCard {...item} onPress={() => onPress(item.id)} />;
          }}
          onViewableItemsChanged={({viewableItems}) =>
            setIndexItemVisible(viewableItems[1].index)
          }
          keyExtractor={item => item.id.toString()}
          snapToInterval={SIZES.width * 0.6 + 20}
          horizontal
          contentContainerStyle={{
            gap: 20,
            paddingHorizontal: SIZES.padding,
            alignItems: 'center',
          }}
        />
      </View>
    </View>
  );
};

export default NowPlayingMovies;

const styles = StyleSheet.create({});
