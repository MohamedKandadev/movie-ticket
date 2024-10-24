import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../constants';
import Skip from '../components/common/Skip';
import FONTS from '../constants/fonts';
import Button from '../components/common/Button';
import {genrs} from '../helpers/genre';
type Props = {};

const FavoriteGenre = (props: Props) => {
  const [favoriteGenre, setFavoriteGenre] = useState<number[]>([]);

  const handleAddFavoriteGenre = (id: number) => {
    if (favoriteGenre.length < 3 && !favoriteGenre.includes(id)) {
      setFavoriteGenre([...favoriteGenre, id]);
    }

    if (favoriteGenre.includes(id)) {
      setFavoriteGenre(favoriteGenre.filter(itemid => itemid !== id));
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
      <View style={styles.screenContainer}>
        <View style={styles.header}>
          <Skip />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
          }}>
          <View>
            <Text style={styles.fGenreHeading}>Select at least 3 genres</Text>
            <Text style={styles.fGenreDesc}>
              Then we will be able to suggest movie for you
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 20,
            }}>
            {genrs.map(item => (
              <Pressable
                style={[
                  styles.genreItem,
                  favoriteGenre.includes(item.id) && {
                    backgroundColor: COLORS.secondary,
                  },
                ]}
                key={item.id}
                onPress={() => handleAddFavoriteGenre(item.id)}>
                <Image source={item.icon} style={styles.genreItemIcon} />
                <Text
                  style={[
                    styles.genreItemText,
                    favoriteGenre.includes(item.id) && {
                      color: COLORS.white,
                    },
                  ]}>
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </View>
          <View style={{width: '75%'}}>
            <Button title="Next" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FavoriteGenre;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.margin,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: SIZES.raduis2 * 2,
  },
  genreItem: {
    width: 92,
    height: 92,
    backgroundColor: COLORS.primary200,
    borderRadius: SIZES.raduis1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genreItemIcon: {
    width: 30,
    height: 30,
    marginBottom: 8,
  },
  genreItemText: {
    ...FONTS.pr4,
    color: COLORS.while60,
  },
  fGenreHeading: {
    ...FONTS.h2,
    color: COLORS.white,
    marginBottom: SIZES.radius,
    textAlign: 'center',
  },
  fGenreDesc: {
    textAlign: 'center',
    ...FONTS.pr2,
    color: COLORS.while40,
    fontSize: SIZES.pr2,
  },
});
