import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MovieCard from '../../components/cards/MovieCard';
import routes from '../../navigation/routes';
import useMovies from '../../hooks/useMovies';
import styles from './Movies.style';
import FilterModal from '../../components/FilterModal';

export default function Movies({navigation}) {
  const {data, loading, error} = useMovies();
  const [selectedGenre, setSelectedGenre] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);

  if (error) {
    Alert.alert(error.message);
  }

  useEffect(() => {
    setMovieList(data);
    setFilteredMovies(data);
  }, [data]);

  useEffect(() => {
    handleFilterMovie();
  }, [selectedGenre]);

  function handleFilterMovie() {
    if (selectedGenre === 'ALL GENRES') {
      setFilteredMovies(data);
    } else {
      const matchedMovies = [];
      movieList.forEach(movie => {
        movie.genre.forEach(genre => {
          if (genre === selectedGenre) {
            matchedMovies.push(movie);
            setFilteredMovies(matchedMovies);
          }
        });
      });
    }
  }

  function goToDetail(movieInfo) {
    navigation.navigate(routes.MOVIE_DETAIL_PAGE, {movie: movieInfo});
  }

  function handleSelectedGenre(genre) {
    setSelectedGenre(genre);
  }

  const renderMovies = ({item}) => (
    <MovieCard movie={item} onClick={() => goToDetail(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FilterModal onGenreSelect={handleSelectedGenre} />
      {loading && <ActivityIndicator size="large" />}
      <FlatList data={filteredMovies} renderItem={renderMovies} />
    </SafeAreaView>
  );
}
