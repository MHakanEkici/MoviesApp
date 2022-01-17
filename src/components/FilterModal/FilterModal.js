import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import useGenres from '../../hooks/useGenres/useGenres';
import styles from './FilterModal.style';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FilterModal({onGenreSelect}) {
  const [filterBarVisible, setfilterBarVisible] = useState(false);
  const {genreData, genreError} = useGenres();
  const [selectedGenre, setSelectedGenre] = useState('');

  if (genreError) {
    Alert.alert(error.message);
  }

  function handleSelectGenre(item) {
    setSelectedGenre(item.name);
    onGenreSelect(item.name);
  }

  function handlefilterBarVisible() {
    setfilterBarVisible(!filterBarVisible);
  }

  const renderGenres = ({item}) => (
    <TouchableOpacity onPress={() => handleSelectGenre(item)}>
      <View
        style={{
          ...styles.genreCard,
          backgroundColor: selectedGenre === item.name ? '#c78b09' : '#5b75e6',
        }}>
        <Text style={styles.movieGenre}>
          <Icon name="movie-open-outline" size={20}></Icon> {item.name}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={handlefilterBarVisible}>
        <Text style={styles.filterButtonText}>Filter Movies</Text>
      </TouchableOpacity>
      <Modal
        isVisible={filterBarVisible}
        style={styles.modal}
        onBackButtonPress={handlefilterBarVisible}
        onBackdropPress={handlefilterBarVisible}
        onSwipeComplete={handlefilterBarVisible}>
        <View style={styles.container}>
          <FlatList data={genreData} renderItem={renderGenres} />
        </View>
      </Modal>
    </View>
  );
}
