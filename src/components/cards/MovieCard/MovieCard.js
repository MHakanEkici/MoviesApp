import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './MovieCard.style';

export default function MovieCard({movie, onClick}) {
  const renderGenres = item => (
    <View style={styles.genreCard}>
      <Text style={styles.movieGenre}>{item}</Text>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.topView}>
          <Text style={styles.movieName}>{movie.name}.</Text>
          <Text style={styles.movieRate}>
            <Icon name="star" size={25} /> {movie.rate}
          </Text>
        </View>
        <View style={styles.genreView}>
          {movie.genre.map(item => renderGenres(item))}
        </View>
        <Text numberOfLines={2} style={styles.movieBrief}>
          {movie.brief}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
