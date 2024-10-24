import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {movie} from '../../types/interfaces/data';
import {baseImagePath} from '../../api';
import {COLORS, SIZES} from '../../constants';
import {CARD_SIZE} from '../../types/enums/size';
import {CardMovieProps} from '../../types/interfaces/pages';
import FONTS from '../../constants/fonts';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const MovieCard: FC<CardMovieProps> = ({poster_path, original_title}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{uri: baseImagePath('w200', poster_path)}}
        style={styles.cardImage}
      />
      <View style={styles.cardMovieInfo}>
        <Text style={styles.cardMovieName}>{original_title}</Text>
        <Text style={styles.cardMovieCategories}>Horror, Mytery</Text>
        <View style={{flexDirection: 'row', gap: 4}}>
          <FontAwesomeIcon icon={faStar} color="#F99B00" />
          <FontAwesomeIcon icon={faStar} color="#F99B00" />
          <FontAwesomeIcon icon={faStar} color="#F99B00" />
          <FontAwesomeIcon icon={faStar} color="#F99B00" />
          <FontAwesomeIcon icon={faStar} color={COLORS.primary100} />
        </View>
      </View>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 93,
    height: 105,
    borderRadius: SIZES.radius,
    marginRight: SIZES.margin,
  },
  cardMovieInfo: {},
  cardMovieName: {
    ...FONTS.h1,
    fontSize: 18,
    color: COLORS.white,
    marginBottom: 6,
  },
  cardMovieCategories: {
    ...FONTS.pr2,
    color: COLORS.gray400,
    marginBottom: 14,
  },
});
