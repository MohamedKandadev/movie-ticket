import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {COLORS, SIZES, STYLES} from '../../constants';
import Input from '../../components/common/Input';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import MovieCard from '../../components/common/MovieCard';
import MovieCard2 from '../../components/common/MovieCard2';
import {CARD_SIZE} from '../../types/enums/size';
import {useSearchMovieQuery} from '../../store/movies/api';
import FONTS from '../../constants/fonts';
import Filter from '../../components/searchscreen/Filter';
import SearchResult from '../../components/searchscreen/SearchResult';
import {NavigationScreenProps} from '../../types/interfaces/pages';
import {TABS} from '../../types/enums/Route';

type Props = {};

const Search: FC<NavigationScreenProps> = ({navigation}) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [isNowPlayingVisible, setIsNowPlayingVisible] =
    useState<boolean>(false);
  const [movies, setMovies] = useState<any[]>([]);
  const {data} = useSearchMovieQuery(searchInput);
  const nowPlayingMovies = useSelector(
    (state: RootState) => state.movie.nowPlayingMovies,
  );

  useEffect(() => {
    if (data?.results) {
      setMovies(data?.results);
    }
  }, [data]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View style={{...STYLES.screenContainer}}>
        <Input
          placeHolder="Search movie"
          onChange={value => setSearchInput(value)}
          IconRight={
            <FontAwesomeIcon icon={faSearch} size={18} color={COLORS.gray} />
          }
        />

        <Filter
          isNowPlayingVisible={isNowPlayingVisible}
          setIsNowPlayingVisible={() =>
            setIsNowPlayingVisible(!isNowPlayingVisible)
          }
        />
        <SearchResult
          movies={movies}
          isNowPlayingVisible={isNowPlayingVisible}
          onPress={id => navigation.navigate(TABS.MOVIE_DETAILS)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
