import {useRoute} from '@react-navigation/core';
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ReviewModal from '../../components/ReviewModal';
import RecommendMovieCard from '../../components/cards/RecommendMovieCard';

import styles from './MovieDetail.style';

export default function MovieDetail() {
  const route = useRoute();

  const {movie} = route.params;

  const renderGenres = item => (
    <View style={styles.genreCard}>
      <Text style={styles.movieGenre}>{item}</Text>
    </View>
  );

  const renderCast = item => (
    <View style={styles.castCard} >
      <Text style={styles.movieCast}>• {item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.topView}>
          <Text style={styles.movieName}>{movie.name}.</Text>
          <Text style={styles.movieRate}>
            <Icon name="star" size={35} /> {movie.rate}
          </Text>
        </View>
        <View style={styles.genreView}>{movie.genre.map(item => renderGenres(item))}</View>
        <Text style={styles.title}>BRIEF  <Icon name="card-text" size={30}/> </Text>
        <Text style={styles.movieBrief}>{movie.brief}</Text>
        <Text style={styles.title}>
          DIRECTOR: <Text style={styles.movieDirector}>{movie.director}</Text>
        </Text>
        <Text style={styles.title}>CAST  <Icon name="account-group" size={30}/></Text>
        {movie.cast.map(item => renderCast(item))}
        <RecommendMovieCard movieGenre={movie.genre[0]}></RecommendMovieCard>
        <ReviewModal movieId={movie.id}></ReviewModal>
      </ScrollView>
    </SafeAreaView>
  );
}
