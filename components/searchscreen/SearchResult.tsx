import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import MovieCard from '../common/MovieCard';
import MovieCard2 from '../common/MovieCard2';
import {CARD_SIZE} from '../../types/enums/size';
import {SIZES} from '../../constants';
import {movie} from '../../types/interfaces/data';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

type Props = {};

const SearchResult: FC<{
  movies: movie[];
  isNowPlayingVisible: boolean;
  onPress: (id: number | string) => void;
}> = ({movies, isNowPlayingVisible, onPress}) => {
  const nowPlayingMovies = useSelector(
    (state: RootState) => state.movie.nowPlayingMovies,
  );

  return (
    <View style={{marginTop: SIZES.radius * 4}}>
      <FlatList
        ListHeaderComponent={() =>
          isNowPlayingVisible && (
            <View>
              {nowPlayingMovies.slice(0, 3).map(item => (
                <MovieCard2
                  {...item}
                  key={item.id}
                  onPress={() => onPress(item.id)}
                />
              ))}
            </View>
          )
        }
        data={movies}
        renderItem={({item}) => (
          <MovieCard
            {...item}
            size={CARD_SIZE.SMALL}
            onPress={() => onPress(item.id)}
          />
        )}
        keyExtractor={item => item.id.toString()}
        snapToInterval={SIZES.width * 0.6}
        decelerationRate={0}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between', gap: 20}}
        contentContainerStyle={{
          gap: 20,
          paddingBottom: 40,
        }}
        // onViewablr
      />
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({});
