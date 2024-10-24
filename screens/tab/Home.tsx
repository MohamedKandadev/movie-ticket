import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import {COLORS, SIZES, STYLES} from '../../constants';
import Header from '../../components/home/Header';
import Input from '../../components/common/Input';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical, faSearch} from '@fortawesome/free-solid-svg-icons';
import Heading2 from '../../components/common/Heading2';
import {
  useGetNowPlayingMoviesQuery,
  useGetNowPopularMoviesQuery,
} from '../../store/movies/api';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import MovieCard from '../../components/common/MovieCard';
import NowPlayingMovies from '../../components/home/NowPlayingMovies';
import PopularMovies from '../../components/home/PopularMovies';
import {NavigationScreenProps} from '../../types/interfaces/pages';
import {TABS} from '../../types/enums/Route';

type Props = {};

const Home: FC<NavigationScreenProps> = ({navigation}) => {
  const {data, isLoading} = useGetNowPlayingMoviesQuery();
  const {} = useGetNowPopularMoviesQuery();
  const movies = useSelector((state: RootState) => state.movie);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{...STYLES.screenContainer, paddingHorizontal: 0}}>
          <View
            style={{
              marginBottom: SIZES.radius * 4,
              paddingHorizontal: SIZES.padding,
            }}>
            <Header />
            <Input
              placeHolder="Search movie"
              IconLeft={
                <FontAwesomeIcon
                  icon={faSearch}
                  size={18}
                  color={COLORS.gray}
                />
              }
              IconRight={
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  size={18}
                  color={COLORS.gray}
                />
              }
            />
          </View>
          <NowPlayingMovies
            onPress={id =>
              navigation.navigate(TABS.MOVIE_DETAILS, {movieId: id})
            }
          />
          <PopularMovies />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
