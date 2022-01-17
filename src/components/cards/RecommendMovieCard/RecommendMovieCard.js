import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useRecommendedMovies from '../../../hooks/useRecommendedMovies';
import styles from './RecommendMovieCard.style';

export default function RecommendMovieCard({movieGenre}) {
  const {recMovieData, recMovieLoading, recMovieError} =
    useRecommendedMovies(movieGenre);

  if (recMovieError) {
    Alert.alert('An error occurred when recommended movies loading');
  }

  const renderRecMoviesGenres = item => (
    <View style={styles.genreCard}>
      <Text style={styles.movieGenre}>{item}</Text>
    </View>
  );

  const renderRecMovies = ({item}) => (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.movieName}>{item.name}.</Text>
        <Text style={styles.movieRate}>
          <Icon name="star" size={25} /> {item.rate}
        </Text>
      </View>
      <View style={styles.genreView}>
        {item.genre.map(item => renderRecMoviesGenres(item))}
      </View>
    </View>
  );

  return (
    <View>
      <Text style={styles.recommendText}>
        You Can Also Like <Icon name="heart" size={30} />
      </Text>
      {recMovieLoading && <ActivityIndicator size="large" />}
      <View style={styles.genreView}>
        <FlatList
          data={recMovieData}
          renderItem={renderRecMovies}
          style={styles.genreView}
          render
        />
      </View>
    </View>
  );
}
