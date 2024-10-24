import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {movie} from '../../types/interfaces/data';
import {baseImagePath} from '../../api';
import {SIZES} from '../../constants';
import {CARD_SIZE} from '../../types/enums/size';
import {CardMovieProps} from '../../types/interfaces/pages';

const CardSize = (size: CARD_SIZE) => {
  switch (size) {
    case CARD_SIZE.SMALL:
      return {width: SIZES.width * 0.4, height: 200};
    case CARD_SIZE.NORMAL:
      return {width: SIZES.width * 0.6, height: 300};
    default:
      return {width: SIZES.width * 0.6, height: 300};
  }
};

const MovieCard: FC<CardMovieProps> = ({
  poster_path,
  size = CARD_SIZE.LARGE,
  onPress,
}) => {
  console.log(poster_path);
  return (
    <Pressable
      style={{borderRadius: SIZES.raduis3, overflow: 'hidden'}}
      onPress={onPress}>
      <Image
        source={{uri: baseImagePath('w500', poster_path)}}
        style={CardSize(size)}
      />
    </Pressable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});
